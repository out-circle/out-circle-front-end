import { useEffect, useState } from "react";
import "./Message.css";
import { Link, useNavigate } from "react-router-dom";
import uploade from "../../Assets/images/Group 375.png";
import check from "../../Assets/images/check_box.png";
import send_message from "../../Assets/images/sendMessage.png";
import { AudioRecorder } from "react-audio-voice-recorder";
import logo from "../../Assets/images/logo.svg";
import Axios from "axios";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const Message = ({
  user,
  address,
  head,
  image,
  text,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  gmail,
  admin,
  change_route,
}) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const width = windowSize.innerWidth;
  return width > 600 ? (
    <Message1
      user={user}
      text={text}
      image={image}
      gmail={gmail}
      admin={admin}
      change_route={change_route}
    />
  ) : (
    <Message2
      head={head}
      address={address}
      text1={text1}
      text2={text2}
      text3={text3}
      text4={text4}
      text5={text5}
      text6={text6}
      text7={text7}
      text8={text8}
      gmail={gmail}
      admin={admin}
      change_route={change_route}
      user={user}
    />
  );
};

export default Message;

const Message1 = ({ text, image, gmail, admin, change_route, user }) => {
  const user_ = localStorage.getItem(`${user}`);
  const user_obj = JSON.parse(user_);
  const data = user_
    ? localStorage.getItem("user")
    : localStorage.getItem("visitor");
  const obj = JSON.parse(data);

  const localNotes = localStorage.getItem("notes");
  const navigate = useNavigate();
  const [value1, setValue1] = useState(localNotes);
  const [value2, setValue2] = useState();
  const [value3, setValue3] = useState();

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  const handleChange = (e) => {
    localStorage.setItem("notes", e.target.value);
    setValue1(e.target.value);
  };

  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    setValue3(audio.src);
    ConfirmAudio();
    audio.controls = true;
    document.body.appendChild(audio);
    const nest = document.body.appendChild(audio);
    nest.className = "fff";
  };
  const data_ = [
    {
      key: "text",
      value: value1,
    },
    {
      key: "user_email",
      value: obj ? obj.email : "",
    },
    {
      key: "admin_email",
      value: gmail,
    },
    {
      key: "admin_email",
      value: admin,
    },
    {
      key: "subject",
      value: "Services",
    },
    {
      key: "phone_number",
      value: obj ? obj.phone_number : "",
    },
    {
      key: "whatsapp_number",
      value: obj ? obj.whatsapp_number : "",
    },
  ];

  const ConfirmAudio = () => {
    toast.success("Audio clip uploaded successfully");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const audioBlob = await fetch(value3).then((r) => r.blob());
    const audioFile = new File([audioBlob], "voice.mp3", { type: "audio/mp3" });
    data_.push({
      key: "file2",
      value: value3 ? audioFile : null,
    });
    const formData = new FormData();
    data_.map((item) => formData.append(item.key, item.value));

    if (value2) {
      for (let i = 0; i < value2.length; i++) {
        formData.append("file1" + i, value2[i]);
      }
    }

    if (!obj) {
      toast.error(
        "Please click on the green rectangle to complete your information to complete sending the request"
      );
    } else {
      Axios.post(`${BASE_API_URL}/api/email/send-email`, formData)
        .then((res) => {
          if (typeof res.data === "object") {
            toast.success("Your message was sent successfully");
            localStorage.removeItem("visitor");
            setValue1("");
            setValue2();
            setValue3();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const visitorInformation = () => {
    navigate("/visitor");
    localStorage.setItem("change_route", `${change_route}`);
  };

  return (
    <div className="message">
      <div className="section1">
        <div className="div1">
          <p>{text}</p>
        </div>
        <div className="side">
          <img src={`${image}`} alt="" />
        </div>
      </div>
      <div className="section2">
        <div>
          <Toaster />
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            value={value1}
            onChange={handleChange}
            placeholder="Write message here..."
          ></textarea>
          <div className="upload">
            <label htmlFor="file">
              {!value2 ? (
                <p>Upload a file here to send more detials</p>
              ) : (
                <p>Your file has been uploaded successfully</p>
              )}
              <img src={uploade} alt="" width="40px" />
            </label>
            <input
              onChange={(e) => {
                setValue2(e.target.files);
              }}
              id="file"
              type="file"
              style={{ display: "none" }}
              multiple
            />
          </div>
          <div className="audio">
            <AudioRecorder onRecordingComplete={addAudioElement} />
          </div>
          <div>
            <button>
              <img src={send_message} alt="" />
            </button>
          </div>
        </form>
        {!user_obj ? (
          <div
            className="check"
            onClick={visitorInformation}
            style={{ cursor: "pointer" }}
          >
            <p>
              If you are a visitor, please do not record a voice, upload a file,
              or write a message until the information is completed here
            </p>
            <img src={check} alt="" width="40px" />
          </div>
        ) : (
          <div className="check" style={{ cursor: "pointer" }}>
            <p>
              If you are a visitor, please do not record a voice, upload a file,
              or write a message until the information is completed here
            </p>
            <img src={check} alt="" width="40px" />
          </div>
        )}
        <div className="wages">
          Wages are determined after studying the request and before complation.
          In some services, a payment of wages is requesred as a downpayment.
        </div>
      </div>
    </div>
  );
};

const Message2 = ({
  address,
  head,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  gmail,
  admin,
  change_route,
  user,
}) => {
  const user_ = localStorage.getItem(`${user}`);
  const user_obj = JSON.parse(user_);
  const data = user_
    ? localStorage.getItem("user")
    : localStorage.getItem("visitor");
  const obj = JSON.parse(data);

  const localNotes = localStorage.getItem("notes");
  const [value1, setValue1] = useState(localNotes);
  const [value2, setValue2] = useState();
  const [value3, setValue3] = useState();

  const navigate = useNavigate();

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  const handleChange = (e) => {
    localStorage.setItem("notes", e.target.value);
    setValue1(e.target.value);
  };

  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    setValue3(audio.src);
    ConfirmAudio();
    audio.controls = true;
    document.body.appendChild(audio);
    const nest = document.body.appendChild(audio);
    nest.className = "sss";
  };

  const ConfirmAudio = () => {
    toast.success("Audio clip uploaded successfully");
  };

  const data_ = [
    {
      key: "text",
      value: value1,
    },
    {
      key: "user_email",
      value: obj ? obj.email : "",
    },
    {
      key: "admin_email",
      value: gmail,
    },
    {
      key: "admin_email",
      value: admin,
    },
    {
      key: "subject",
      value: "Services",
    },
    {
      key: "phone_number",
      value: obj ? obj.phone_number : "",
    },
    {
      key: "whatsapp_number",
      value: obj ? obj.whatsapp_number : "",
    },
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    const audioBlob = await fetch(value3).then((r) => r.blob());
    const audioFile = new File([audioBlob], "voice.mp3", { type: "audio/mp3" });
    data_.push({
      key: "file2",
      value: value3 ? audioFile : null,
    });
    const formData = new FormData();
    data_.map((item) => formData.append(item.key, item.value));

    if (value2) {
      for (let i = 0; i < value2.length; i++) {
        formData.append("file1" + i, value2[i]);
      }
    }

    if (!obj) {
      toast.error(
        "Please click on the green rectangle to complete your information to complete sending the request"
      );
    } else {
      Axios.post(`${BASE_API_URL}/api/email/send-email`, formData)
        .then((res) => {
          if (typeof res.data === "object") {
            toast.success("Your message was sent successfully");
            localStorage.removeItem("visitor");
            setValue1("");
            setValue2();
            setValue3();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const visitorInformation = () => {
    navigate("/visitor");
    localStorage.setItem("change_route", `${change_route}`);
  };

  return (
    <div className="message2">
      <div className="head">
        <img className="logo" src={logo} alt="" />
        <h2 className="head2">{head}</h2>
        <p className="address">{address}</p>
      </div>
      <div className="body_">
        <div>
          <p>{text1}</p>
        </div>
        <div>
          <p>{text2}</p>
        </div>
        <div>
          <p>{text3}</p>
        </div>
        <div>
          <p>{text4}</p>
        </div>
        <div>
          <p>{text5}</p>
        </div>
        <div>
          <p>{text6}</p>
        </div>
        <div>
          <p>{text7}</p>
        </div>
        <div className="text8">
          <p>{text8}</p>
        </div>
      </div>
      <div className="content_en">
        <div>
          <Toaster />
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            value={value1}
            onChange={handleChange}
            className="textarea"
            placeholder="write your message here..."
          ></textarea>
          <div className="upload">
            <label htmlFor="file">
              {!value2 ? (
                <p>Upload a file here to send more detials</p>
              ) : (
                <p className="uploaded">
                  Your file has been uploaded successfully
                </p>
              )}
              <img src={uploade} alt="" width="40px" />
            </label>
            <input
              onChange={(e) => setValue2(e.target.files)}
              id="file"
              type="file"
              style={{ display: "none" }}
              multiple
            />
          </div>
          <div className="audio_ar">
            <AudioRecorder onRecordingComplete={addAudioElement} />
          </div>
          <div>
            <button>
              <img src={send_message} alt="" />
            </button>
          </div>
        </form>
        {!user_obj ? (
          <div
            className="check"
            onClick={visitorInformation}
            style={{ cursor: "pointer" }}
          >
            <p>
              If you are a visitor, please do not record a voice, upload a file,
              or write a message until the information is completed here
            </p>
            <img src={check} alt="" width="40px" />
          </div>
        ) : (
          <div className="check" style={{ cursor: "pointer" }}>
            <p>
              If you are a visitor, please do not record a voice, upload a file,
              or write a message until the information is completed here
            </p>
            <img src={check} alt="" width="40px" />
          </div>
        )}
        <div className="wages_">
          Wages are determined after studying the request and before complation.
          In some services, a payment of wages is requesred as a downpayment.
        </div>
      </div>
    </div>
  );
};

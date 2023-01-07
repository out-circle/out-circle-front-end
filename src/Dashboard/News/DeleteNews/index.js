import { useState, useEffect } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DeleteNews = () => {
  const navigate = useNavigate();
  const [newsInfo, setNewsInfo] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  useEffect(() => {

    if (!localStorage.getItem("admin_login")) {
      navigate("/dashboard/admin/login");
    }

    Axios.get(`${BASE_API_URL}/api/news/all-news`)
      .then((res) => {
        let data = res.data;
        if (data.length > 0) setNewsInfo(data);
        else setErrorMessage("Sorry Can't News Now For Delete It");
      })
      .catch((err) => console.log(err));
  }, [BASE_API_URL]);

  const DeleteNews = (e, newsId) => {
    e.preventDefault();
    Axios.delete(`${BASE_API_URL}/api/news/delete-news/${newsId}`)
      .then((res) => {
        document.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="delete-news text-center">
      <div className="container">
        <h1>Delete News</h1>
        {newsInfo ? (
          <table style={{ direction: "rtl", width: "100%" }}>
            <tbody>
              {newsInfo.map((news) => (
                <tr key={news._id} style={{ border: "2px solid #EEE" }}>
                  <td style={{ border: "2px solid #EEE", padding: "10px" }}>
                    <textarea
                      type="text"
                      className="form-control"
                      defaultValue={news.content}
                      style={{ resize: "none" }}
                      disabled
                    />
                  </td>
                  <td>
                    <form
                      className="delete-news-form"
                      onSubmit={(e) => DeleteNews(e, news._id)}
                    >
                      <button type="submit" className="btn btn-danger">
                        Delete News
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ): (
          <p className="alert alert-danger">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default DeleteNews;

import React from "react";
import Message from "../../../Components/Message/Message";
import image from "../../../Assets/images/personal_services/Group 480.png";
import './index.css';

const PersonalService_1 = () => {
  return (
    <div>
      <Message
        gmail={"p.individuals.outcircle@gmail.com"}
        admin={"outcircle2023@gmail.com"}
        change_route={"personal-services/service1"}
        user={"user_individuals"}
        image={image}
        text={"Medical services"}
        head={"individuals"}
        address={"Medical services"}
        text1={
          "Providing scientific medical advice based on reliable experiences"
        }
        text2={
          "Nominate the doctors or medical laboratories that fit the medical case."
        }
        text3={"Helping to find lost medicaments if possible"}
        text4={"Providing hieghly experienced nurses for reasonable prices"}
        text5={"Consultations and medical advice based on alternative medicine"}
        text6={
          "Providing herbal remedies and guaranteed herbal mixtures for many cases form reliable sources"
        }
        text7={
          "Providing psychological support to all cases through effective and studied methods"
        }
        text8={
          " You can also provide us with your personal medical experiences and the cases you have experienced by presenting it to us to be used for the benefit of all in the event that similar cases are presented to us  "
        }
      />
    </div>
  );
};

export default PersonalService_1;

import * as React from "react";
import {Create, SimpleForm, TextInput, DateInput, required } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import {addDoc, collection} from 'firebase/firestore';
import {db} from '../firebase-config';
const phoneNumberFormat = (num) => {
     let x;
    if (typeof num !== "undefined") {
          
        var pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(num)) {

          x= "Please enter only number.";
        }else if(num.length != 10){
          x= "Please enter valid phone number.";
        }
      }
    return x;
};
const validatePhone = [required("Phone number is required"), phoneNumberFormat];

const BodyWordLimit = (num) => {
    let x;
    if(num.length>1000)
    {
        x="You can write only 1000 characters in Description";
    }
   return x;
};
const validateBody = [required("Discription is required"), BodyWordLimit];

const TitleWordLimit = (num) => {
    let x;
    if(num.length>255)
    {
        x="You can write only 255 characters in Title";
    }
   return x;
};
const validateTitle = [required("Title is required"), TitleWordLimit];

const postsCollectionRef = collection(db, "posts");

const PostCreate = (props) => {

  const createPost = async (data) => {

   var formdata =  {
      title: data['data']['title'],
      body: data['data']['body'],
      phone: data['data']['phone'],
      date: data['data']['date']
    }
    console.log(formdata);
    await addDoc(postsCollectionRef, formdata).catch(error => {console.log(error)});

    props.history.push("/posts");
  };

    return (
      
        <Create {...props} onSuccess={createPost}>
            <SimpleForm >
                <TextInput source="title" name="title" validate={validateTitle}  />
                <TextInput source="body" name="body" validate={validateBody} />
                <TextInput source="phone" name="phone" validate={validatePhone}  />
                <DateInput source="date" name="date" validate={required()}  />
            </SimpleForm>
        </Create>
    );
};
    
export default PostCreate
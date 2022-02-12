import * as React from "react";
import { Edit, SimpleForm, TextInput, DateInput, required, EditActions } from "react-admin";
import RichTextInput from "ra-input-rich-text";
import {updateDoc, collection} from 'firebase/firestore';
import {db} from '../firebase-config';
// import { useRef } from "react";
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
console.log(postsCollectionRef);

const PostEdit = (props) => {

  const editPost = async (data) => {
    console.log(data);
    // console.log(myref)
   var formdata =  {
      // title: data['data']['title'],
      // body: data['data']['body'],
      // phone: data['data']['phone'],
      // date: data['data']['date']
      title: "abc",
      body: "def",
      phone: 1234567890,
      date: new Date(),
    }
    // console.log(formdata);
    await updateDoc(postsCollectionRef, formdata).catch(error => {console.log(error)});

    props.history.push("/posts");
  };

  // const myref = React.useRef();
  const EditActions = (props) => {
    console.log(props);
    return <div></div>
  };

  return (
    <Edit actions={<EditActions />} title="Edit Post" {...props} onSuccess = {editPost} >
      <SimpleForm >
        <TextInput disabled source="id" />
        <TextInput source="title" name="title" validate={validateTitle} />
        <RichTextInput source="body" name="body" validate={validateBody} />
        <DateInput
          label="Publication date"
          source="published_at"
          name="date"
          defaultValue={new Date()}
        />
        <TextInput source="phone" name="phone" validate={validatePhone} />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;

import * as React from "react";
import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";
import RichTextInput from "ra-input-rich-text";
const PostEdit = (props) => {
//   const editPost =  (data) => {
//     console.log(data);
    
//   };

  return (
    <Edit title="Edit Post" {...props} onSuccess = { ({data})=>{console.log(data)}} >
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" />
        <RichTextInput source="body" />
        <DateInput
          label="Publication date"
          source="published_at"
          defaultValue={new Date()}
        />
        <TextInput source="phone" />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;

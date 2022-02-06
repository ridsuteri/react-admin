import * as React from "react"
import { List, Datagrid, EditButton, DeleteButton, DateField, TextField, ShowButton, TextInput } from "react-admin"

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  // <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
  //     <SelectInput optionText="name" />
  // </ReferenceInput>,
]

const PostList = (props) => {
  return (
    <List {...props} bulkActionButtons={false} filters={postFilters}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <DateField source="publishedAt" />
        {/* <EditButton basePath="/posts"/>
                    <DeleteButton basePath="/posts"/> */}
        <ShowButton basePath="/posts" />
      </Datagrid>
    </List>
  )
}

export default PostList

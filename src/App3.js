import { Admin, Resource } from "react-admin";
import fakeDataProvider from "ra-data-fakerest";
import PostList from "./components/PostList";
import PostCreate from "./components/PostCreate";
import PostEdit from "./components/PostEdit";
import PostShow from "./components/Show";
import MyPostList from "./components/MyPosts";
import Grid from "./Grid";
import { db } from "./firebase-config";
import React, { useState, useEffect } from "react";
import { collection,getDocs, query } from "firebase/firestore";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [user, setUser] = useState(null);
  const fetchPosts = async () => {
    try {
      const q = query(collection(db, "posts"));
      const doc = await getDocs(q);
      // console.log(doc.docs[0].id);
      const data = await doc.docs.map((d) => d.data());

      for (var i = 0; i < data.length; i++) {
        data[i].publishedAt = data[i].date;
        data[i].firebaseid = doc.docs[i].id;
        delete data[i].date;
      }
      delete data.date;
      setPosts(data);
      // await console.log(data);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Admin
      dataProvider={
        fakeDataProvider({
        posts: posts,
        myposts: posts,
        }
      )}
    >
      <Resource
        name="posts"
        list={PostList}
        create={PostCreate}
        show={PostShow}
        edit={PostEdit}
      />
      <Resource
        name="myposts"
        list={MyPostList}
        create={PostCreate}
        show={PostShow}
        edit={PostEdit}
      />
      <Resource
        name="gridView"
        list={Grid}
        create={PostCreate}
        show={PostShow}
        edit={PostEdit}
        
      />
    </Admin>
  );
}

export default App;

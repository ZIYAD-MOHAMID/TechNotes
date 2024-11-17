import { store } from "../../app/store";
import { notesApiSlice } from "../notes/notesApiSlice";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { usersApiSlice } from "../users/usersApiSlice";

const Prefetch = () => {
  useEffect(() => {
    store.dispatch(
      notesApiSlice.util.prefetch("getNotes", "notesList", { force: true })
    );
    store.dispatch(
      usersApiSlice.util.prefetch("getUsers", "usersList", { force: true })
    );
  }, []);

  return <Outlet />;
};
export default Prefetch;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const content = (
    <section className="welcome">
      <p>
        {new Intl.DateTimeFormat("ar-EG", {
          dateStyle: "full",
          timeStyle: "long",
        }).format(time)}
      </p>

      <h1>Welcome!</h1>

      <p>
        <Link to="/dash/notes">View techNotes</Link>
      </p>

      <p>
        <Link to="/dash/notes/new">Add New techNote</Link>
      </p>

      <p>
        <Link to="/dash/users">View User Settings</Link>
      </p>

      <p>
        <Link to="/dash/users/new">Add New User</Link>
      </p>
    </section>
  );

  return content;
};
export default Welcome;

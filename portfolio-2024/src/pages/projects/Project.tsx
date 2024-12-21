import { useParams } from "react-router";

export default function Project() {
  const params = useParams();

  return (
    <div>
      <h1>Project {params.project}</h1>
    </div>
  );
}

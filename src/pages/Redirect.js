import { useParams } from "react-router-dom";

function Redirect() {
  const params = useParams();
  const { urlId } = params;

  const listUrl = [
    {
      id: "d102c263-319b-4841-9efb-6e47120f7487",
      url: "https://youtu.be/",
    },
  ];
  window.location.href = listUrl.find((l) => (l.id = urlId)).url;
  return <></>;
}

export default Redirect;

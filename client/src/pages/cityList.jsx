import { Card } from "antd";

const endpoint = "http://localhost:4000/dl/cities";

const Cities = () => (
  <Card
    style={{
      backgroundImage:
        "url('/img/cities/arucas.png')",
      width: 300,
    }}
  >
    <h1>Arucas</h1>
  </Card>
);
export default Cities;

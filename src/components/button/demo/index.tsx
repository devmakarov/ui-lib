import Button from "components/button/Button";

function Demo() {
  return (
    <>
      <Button>primary</Button>
      <Button type="info" size="large">
        info
      </Button>
      <Button type="info" size="medium" onClick={() => console.log("clicked")}>
        click me
      </Button>
      <Button disabled={true}>disabled</Button>
      <Button style={{ fontSize: "20px" }}>disabled</Button>
      <Button className="custom-classname">custom</Button>
    </>
  );
}

export default Demo;

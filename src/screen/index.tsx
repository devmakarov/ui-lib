import { FC } from "react";
import ButtonDemo from "components/button/demo/index";
import ModalDemo from "components/modal/demo/index";
import SelectDemo from "components/select/demo/index";

const Index: FC = () => {
  return (
    <>
      <SelectDemo />
      <ModalDemo />
      <ButtonDemo />
    </>
  );
};

export default Index;

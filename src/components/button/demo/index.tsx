import Button from "components/button/Button";
import { FC } from "react";

const Demo: FC = () => {
  return (
    <section className="preview container">
      <h2 className="preview__title mb-24">
        Buttons
        <a
          className="preview__source"
          href="https://github.com/devmakarov/ui-lib/blob/main/src/components/button/demo/index.tsx"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/coding.png" width="20px" height="20px" alt="" />
        </a>
      </h2>

      <div className="preview__column">
        <Button className="mb-16">Primary</Button>
        <Button className="mb-16" size="medium">
          Primary medium
        </Button>
        <Button className="mb-16" size="large">
          Primary large
        </Button>
        <Button className="mb-16" type="info">
          Info
        </Button>
        <Button className="mb-16" type="info" size="medium">
          Info medium
        </Button>
        <Button className="mb-16" type="info" size="large">
          Info large
        </Button>
        <Button className="mb-16" disabled>
          Disabled
        </Button> 
        <Button className="mb-16" size="large" disabled>
          Disabled large
        </Button>
      </div>
    </section>
  );
};

export default Demo;

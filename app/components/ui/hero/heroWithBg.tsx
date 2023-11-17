import cx from "clsx";
import { Title, Text, Container, Button, Overlay } from "@mantine/core";
import classes from "./heroWithBg.module.css";

const defaultBg =
  "https://images.unsplash.com/photo-1469228252629-cbe7cb7db2c8?q=80&w=1546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
type HeroImageBackgroundProps = {
  bgImg?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  btnAction1?: string;
  btnAction2?: string;
  handleBtn1?: () => void;
  handleBtn2?: () => void;
};
export const HeroImageBackground: React.FC<HeroImageBackgroundProps> = ({
  bgImg = defaultBg,
  title,
  highlightText,
  btnAction1,
  btnAction2,
  description,
  handleBtn1,
  handleBtn2,
}) => {
  return (
    <div
      className={classes.wrapper}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          {title}
          <Text component="span" inherit className={classes.highlight}>
            {highlightText}
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            {description}
          </Text>
        </Container>

        <div className={classes.controls}>
          {btnAction1 !== undefined && (
            <Button
              className={classes.control}
              variant="gradient"
              size="lg"
              onClick={handleBtn1}
            >
              {btnAction1}
            </Button>
          )}
          {btnAction2 !== undefined && (
            <Button
              className={cx(classes.control, classes.secondaryControl)}
              size="lg"
              onClick={handleBtn2}
            >
              {btnAction2}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

import { Text, Box, Stack, rem } from "@mantine/core";
import { IconSun, IconPhone, IconMapPin, IconAt } from "@tabler/icons-react";
import classes from "./contactIcons.module.css";

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  ...others
}: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: "Email", description: "httlKnoxville@gmail.com", icon: IconAt },
  { title: "Phone", description: "+1-(865)-206-5961", icon: IconPhone },
  { title: "Address", description: "8000 Kingston Pike", icon: IconMapPin },
  {
    title: "Worship every weeks",
    description: "Sun: 8 a.m. – 11 p.m.",
    icon: IconSun,
  },
];

export function ContactIconsList({
  data = MOCKDATA,
}: {
  data?: ContactIconProps[];
}) {
  const items = data.map((item, index) => (
    <ContactIcon key={index} {...item} />
  ));
  return <Stack>{items}</Stack>;
}

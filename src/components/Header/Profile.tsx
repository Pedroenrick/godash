import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  name: string;
  avatar?: string;
  email: string;
  showProfileData?: boolean;
}
export function Profile({
  name,
  avatar,
  email,
  showProfileData = true,
}: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>{name}</Text>
          <Text color="gray.300" fontSize="small">
            {email}
          </Text>
        </Box>
      ) }
      <Avatar size="md" name={name} src={avatar} />
    </Flex>
  );
}

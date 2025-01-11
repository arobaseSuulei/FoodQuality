import {Flex, Text, Button, Badge} from "@radix-ui/themes";

export default function Radix() {
    return (
        <Flex gap="2">
            <Badge color="orange">In progress</Badge>
            <Badge color="blue">In review</Badge>
            <Badge color="green">Complete</Badge>
        </Flex>

    );
}

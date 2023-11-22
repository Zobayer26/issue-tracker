import { Text } from "@radix-ui/themes";
import { PropsWithChildren, ReactNode } from "react";

// interface Props{
//     children:ReactNode
// }
//instead of declare type we can use Props withChildren
const ErrorMessage = ({children}:PropsWithChildren) => {
    if(!children) return null
    return (
        <Text color="red" as="p">{children}</Text>
    );
};

export default ErrorMessage;
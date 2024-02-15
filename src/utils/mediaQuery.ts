import { useMediaQuery } from '@mantine/hooks';
import { Tooltip, Button, em } from '@mantine/core';

// export const sm = useMediaQuery(`(max-width: ${em(750)})`)
export const maxWidth = (breakpoint: any) => {
    return `(max-width: ${breakpoint})`;
}
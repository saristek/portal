import { sleep } from '$lib/helper/function';
import many from '$trpc/routes/test/array'
import { t } from '$trpc/init';
import { z } from 'zod';

export default t.router({
    welcome: t.procedure.input(z.string().min(3)).query(({ input }) => {
        return `wellllcomme ${input}`;
    }),
    welcomeSleep: t.procedure.input(z.string().min(3)).query(async function ({ ctx, input: name }) {
        await sleep(0.5, 2);
        if (name === 'error') {
            throw t.error(`${name} is not a valid name`);
        }
        return `Welcome ${name}`;
    }),
});
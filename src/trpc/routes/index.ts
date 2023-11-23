import { t } from '$trpc/init';

export default t.router({
    welcome: t.procedure.query(function ({ ctx }) {
        return ctx.welcome;
    })
});
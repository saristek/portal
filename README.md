#PORTAL SMP N 1 SRANDAKAN

### https://portal.smpsransa.sch.id

## Reference
1. prisma-supabase
   * [by prisma](https://www.prisma.io/docs/guides/database/supabase)
   * [by supabase](https://supabase.com/partners/integrations/prisma)
   * [with rls](https://medium.com/@ngoctranfire/using-prisma-with-supabase-row-level-security-and-multi-schema-7c53418adba3)
2. 

## Database
> we use supabase instead prisma\
> you can hosted by your own

* self hosted supabase
  > optional but we highly recomend
  ```
  https://supabase.com/docs/guides/self-hosting/docker
  ```
* working supabase with `bunx`
  ```json
  // package.json
  "trustedDependencies": [
    "supabase"
  ]
  ```
* generate types
  ```sh
  bunx supabase gen types typescript --project-id gtuequstglbcksoqcfar --schema public > types/supabase.ts
  ```

## BUILD
```
BUILD_ENV=HOTSPOT pnpm build
```

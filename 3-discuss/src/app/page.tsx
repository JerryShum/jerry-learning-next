// "use client"

import { Button } from '@nextui-org/button';
import * as actions from '@/actions';
import { auth } from '@/auth';
import Profile from '@/components/Profile';

export default async function Home() {
   const session = await auth();
   console.log(session);

   return (
      <div>
         <form action={actions.signIn}>
            <Button type="submit">Click Me Sign IN</Button>
         </form>
         <form action={actions.signOut}>
            <Button type="submit">Click Me Sign OUT</Button>
         </form>

         {session?.user ? (
            <div>Signed In {JSON.stringify(session.user)}</div>
         ) : (
            <div>Not signed in</div>
         )}

         <Profile />
      </div>
   );
}

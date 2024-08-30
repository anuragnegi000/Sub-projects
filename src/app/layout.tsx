import { SessionProvider } from "next-auth/react";

export default function App({Component,pageProps}:any){
  return(
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
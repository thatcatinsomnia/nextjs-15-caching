import Image from 'next/image';
import Title from '#/components/Title';
import Heading from '#/components/Heading';
import { List, ListItem } from '#/components/List';
import Bold from '#/components/Bold';
import Link from '#/components/Link';
import Code from '#/components/Code';
import fullRouteCacheUrl from './images/full-route-cache.png';
import staticAndDynamicRenderingUrl from './images/static-and-dynamic-rendering.png';

export default function FullRouteCache() {
    console.log('PAGE: [Full Route Cache]');

    return (
        <div>
            <Title>Full Route Cache</Title>

            <section>你可能聽過這些術語: 
              <List>
                  <ListItem>Automatic Static Optimization</ListItem>
                  <ListItem>Static Site Generation</ListItem>
                  <ListItem>Static Rendering</ListItem>
              </List>
              <p className="mt-4">這幾個術語經常被交換使用，但是指的都是同一件事: 在 build 期間，進行 rendering 並對 routes 進行 cache。</p>
            </section>

            <section>
                <p>Next.js 會在 build time render 和 cache routes，避免每次接收到 request 後才進行 rendering。</p>
                <p>想要理解 Full Route Cache 的運作方式，了解 React 如何 render 和 Next.js 怎麼對結果進行 cache 很有幫助:</p>
            </section>

            <section>
                <Heading>1. React Rendering on the Server</Heading>
                <p>在 server ，Next.js 使用 React&apos;s API 進行 rendering。rendering 工作會被分組: individual routes segments 和 Suspense boundaries。</p>

                <p>每種 chunk 的 render 有兩個步驟:</p>

                <List type="ordered">
                    <ListItem>React 將 Server Component renders 成一種優化過的特殊格式，方便用於 streaming，叫做 <Bold>React Server Component Payload</Bold>。</ListItem>
                    <ListItem>Next.js 使用 React Server Component Payload 和 Client Component Javascript 指令在 server 端 render HTML。</ListItem>
                </List>

                <p className="mt-4">這表示我們可以透過 stream 的方式回傳 response。</p>
            </section>

            <section>
                <Heading>2. Next.js Caching on the Server (Full Route Cache)</Heading>
                <p className="mb-4">Next.js 預設行為會在 server 端對 routes rendered 結果(React Server Component Payload 和 HTML)進行 cache。這些 cached 的結果會用在 build 期間靜態 render 和重新驗證。</p>
                <Image 
                    src={fullRouteCacheUrl}
                    alt="full route cache"
                />
            </section>

            <section>
                <Heading>3. React Hyration and Reconcitiation on the Client</Heading>
                <p>client 端的 request 期間:</p>
                <List type="ordered">
                    <ListItem>HTML 會立刻用來顯示 Client 和 Server Component 無法互動的初始化預覽。</ListItem>
                    <ListItem>React Server Component Payload 會和 Client 以及 rendered Server Component trees 進行 reconcile，藉此更新 DOM。</ListItem>
                    <ListItem>The JavaScript 指令用來對 Client Components 進行 <Link href="https://react.dev/reference/react-dom/client/hydrateRoot">hydrate</Link>，並讓 application 可以互動。</ListItem>
                </List>
            </section>

            <section>
                <Heading>4. Next.js Caching on the Client(Router Cache)</Heading>
                <p>React Server Component Payload 會被儲存在 client-side <Link href="/04-router-cache">Router Cache</Link> - 一個獨立的 in-memory cache，透過 route segment 進行分組。Route Cache 透過儲存訪問過的 routes 和 prefetching routes 來改善 navigation 的體驗。</p>
            </section>

            <section>
                <Heading>5. Subsequent Navigations</Heading>
                <p>後續的 navigations 或是 prefetching，Next.js 會檢查 Router Cache 中有沒有儲存 React Server Component Payload，如果有的話，就不會再發送 request 到 server。</p>
            </section>

            <section>
                <Heading>Static and Dynamic Rendering</Heading>
                <p>判斷 route 在 build time 是否被 cached 取決於它是被 statically 或是 dynamically rendered。</p>
                <p className="mb-4">下面圖顯示了兩種差別:</p>
                <Image 
                    src={staticAndDynamicRenderingUrl}
                    alt="static and dynamic rendering"
                />
            </section>

            <section>
                <Heading>Duration</Heading>
                <p>預設 Full Route Cache 是持續性的，這表示 render output 在不同 user requests 間被 cached。</p>
            </section>

            <section>
                <Heading>Invalidation</Heading>
                <p>兩種方式可以取消 Full Route Cache:</p>
                <List>
                    <ListItem>Revalidating Data: 重新驗證 Data Cache 會在 server re-rendering components 並將 output cached，進而讓 Router Cache 失效。</ListItem>
                    <ListItem>Redeploying: 跟 Data Cache 不同，Full Route Cache 會在新的 deployments 被清除。</ListItem>
                </List>
            </section>

            <section>
                <Heading>Opting out</Heading>
                <p>你可以透過 dynamically render Components 方式取消 Full Route Cache:</p>
                <List>
                    <ListItem><Bold>使用 <Link href="https://nextjs.org/docs/app/building-your-application/caching#dynamic-apis">Dynamic API</Link></Bold>: 這會變成在 request 時，dynamically render。Data Cache 還是會被使用。</ListItem>
                    <ListItem>
                        <p><Bold>使用 <Code>dynamic = &apos;force-dynamic&apos;</Code> 或是 <Code>revalidate = 0</Code> route segment config options:</Bold></p>
                        <p>這會跳過 Full Route Cache 和 Data Cache，表示每當有 request，components 會被 rendered 並且資料會被重新獲取。Router Cache 因為是 client cache 關係，所以還是會有。</p>
                    </ListItem>
                    <ListItem>
                        <Bold>取消 Data Cache:</Bold> 如果 routes 中，只要有一個 fetch request 沒有被 cached 的話，這會取消掉 Full Route Cache。有設定 cache 的 fetch 還是會在 Data Cache 中。
                    </ListItem>
                </List>
            </section>

            <footer className="mt-20 flex items-center justify-between">
                <Link href="/05-how-data-cache-works">Prev: How Data Cache Works</Link>
                <Link href="/07-router-cache">Next: Router Cache</Link>
            </footer>
        </div>
    );
}

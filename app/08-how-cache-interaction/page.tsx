import Heading from "#/components/Heading";
import Title from "#/components/Title";
import Link from '#/components/Link';
import Code from '#/components/Code';

import { List, ListItem } from "#/components/List";

export default function Page() {
    console.log('PAGE: [How Cache Interaction]');

    return (
        <div>
            <Title>How Cache Interaction</Title>

            <section>
                <Heading>Data Cache 和 Full Route Cache Interaction</Heading>
                <List>
                    <ListItem>重新驗證或是取消 Data Cache 會使 Full Route Cache 失效，因為 render output 取決於 data。</ListItem>
                    <ListItem>取消 Full Route Cache 不會影響 Data Cache。你可以在 router 中有 cached 和 uncached data。</ListItem>
                </List>
            </section>

            <section>
                <Heading>Data Cache 和 Client-side Router Cache Interaction</Heading>
                <List>
                    <ListItem>要立刻使 Data Cache 和 Router Cache 失效，你可以在 Server Action 中使用 <Code>revalidatePath</Code> 或是 <Code>RevalidateTag</Code></ListItem>
                    <ListItem>在 Route Handler 中重新驗證 Data Cache 並不會立刻使 Router Cache 失效。</ListItem>
                </List>
            </section>

            <footer className="mt-20 flex items-center justify-between">
                <Link href="/07-router-cache">Prev: Router Cache</Link>
            </footer>
        </div>
    );
}

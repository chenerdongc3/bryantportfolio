import { Link } from "react-router-dom";
import { PageContainer } from "@/components/PageContainer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <PageContainer className="flex min-h-[65vh] flex-col items-start justify-center py-20">
      <p className="-rotate-2 border-2 border-foreground bg-highlight px-3 py-1 font-display text-4xl tracking-wide text-highlight-foreground shadow-[4px_4px_0_hsl(var(--foreground))]">404!</p>
      <h1 className="display-title mt-6 text-5xl font-black sm:text-7xl">页面没有找到</h1>
      <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">这个地址不存在，或者内容已经移动。请返回首页继续浏览。</p>
      <Button className="mt-8" asChild><Link to="/">返回首页</Link></Button>
    </PageContainer>
  );
}

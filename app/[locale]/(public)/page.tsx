import { Button } from "@/components/ui/button";
import {useTranslations} from 'next-intl';
import { LocaleSwitcher } from "@/components/locale-switcher";
// import {getTranslations} from 'next-intl/server';//In case of async components

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <main className="p-8 space-y-6">
      <h1>{t('title')}</h1>
      <LocaleSwitcher />
      <div>
        <h1 className="text-3xl font-bold">Chovui</h1>
        <p className="text-muted-foreground">
          Marketplace mua bán trực tuyến
        </p>
      </div>

      <div className="flex gap-3">
        <Button>Đăng tin</Button>

        <Button variant="secondary">
          Xem tin đăng
        </Button>

        <Button variant="outline">
          Tìm kiếm
        </Button>

        <Button variant="destructive">
          Xóa
        </Button>
      </div>
    </main>
  );
}
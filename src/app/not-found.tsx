import { Button, Result } from 'antd'
import Link from 'next/link'

export default function Custom404() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Maaf, halaman yang Anda kunjungi tidak ada."
      extra={
        <Button type="primary">
          <Link href="/"> Kembali Ke Beranda</Link>
        </Button>
      }
    />
  )
}

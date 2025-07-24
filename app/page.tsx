import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Leaf,
  Shield,
  Heart,
  CheckCircle,
  Clock,
  Users,
  Star,
  Phone,
  Mail,
  MapPin,
  ShoppingCart,
  Award,
  Zap,
  Target,
} from "lucide-react";

export default function StomapatechWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-green-800">
              STOMAPATCH
            </span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#produk"
              className="text-green-700 hover:text-green-900 transition-colors"
            >
              Produk
            </a>
            <a
              href="#cara-kerja"
              className="text-green-700 hover:text-green-900 transition-colors"
            >
              Cara Kerja
            </a>
            <a
              href="#penggunaan"
              className="text-green-700 hover:text-green-900 transition-colors"
            >
              Penggunaan
            </a>
            <a
              href="#faq"
              className="text-green-700 hover:text-green-900 transition-colors"
            >
              FAQ
            </a>
            <a
              href="#beli"
              className="text-green-700 hover:text-green-900 transition-colors"
            >
              Beli Sekarang
            </a>
          </nav>
          <Button className="bg-green-600 hover:bg-green-700">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Beli Sekarang
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  Inovasi Terbaru dalam Perawatan Sariawan
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-green-900 leading-tight">
                  Solusi Cerdas untuk
                  <span className="text-blue-600"> Sariawan</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  STOMAPATCH adalah patch hidrogel herbal inovatif yang
                  memberikan perlindungan total dan penyembuhan alami untuk
                  sariawan Anda dengan teknologi mukoadhesif terdepan.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Leaf className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-green-800">Bahan Alami</h3>
                  <p className="text-sm text-gray-600">
                    Ekstrak herbal berkualitas tinggi
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-blue-800">
                    Perlindungan Total
                  </h3>
                  <p className="text-sm text-gray-600">
                    Lapisan pelindung maksimal
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-purple-800">
                    Tekstur Lembut
                  </h3>
                  <p className="text-sm text-gray-600">
                    Nyaman dan tidak mengiritasi
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-lg px-8"
                >
                  <Target className="w-5 h-5 mr-2" />
                  Pelajari Cara Kerja
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 bg-transparent"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Beli Sekarang
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-blue-200 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        src="/bpom.jpg"
                        alt="BPOM Certificate"
                        width={400}
                        height={400}
                        className="w-full h-auto rounded-2xl"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="/halal.jpg"
                        alt="Halal Certificate"
                        width={400}
                        height={400}
                        className="w-full h-auto rounded-2xl"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <span className="text-sm">BPOM & Halal Approved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="produk" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-green-900">
              Tentang STOMAPATCH
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Teknologi hidrogel terdepan yang dikombinasikan dengan kekuatan
              ekstrak herbal untuk memberikan solusi sariawan yang efektif dan
              nyaman.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-green-800">
                Keunggulan Teknologi Hidrogel
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Tekstur Lembut & Elastis
                    </h4>
                    <p className="text-gray-600">
                      Mengikuti kontur mulut dengan sempurna tanpa menimbulkan
                      ketidaknyamanan
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Tidak Mengiritasi
                    </h4>
                    <p className="text-gray-600">
                      Formula hypoallergenic yang aman untuk semua jenis kulit
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Daya Rekat Optimal
                    </h4>
                    <p className="text-gray-600">
                      Menempel dengan kuat namun mudah dilepas tanpa rasa sakit
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Hydrogel Technology"
                width={400}
                height={300}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Ekstrak Tanaman Jarak Cina"
                  width={400}
                  height={300}
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-green-800">
                  Kekuatan Bahan Alami
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold text-green-700 mb-2">
                      Ekstrak Tanaman Jarak Cina
                    </h4>
                    <p className="text-gray-600 mb-3">
                      Bahan aktif utama yang telah terbukti secara ilmiah
                      memiliki sifat antibakteri dan antiinflamasi yang kuat.
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">
                          Flavonoid
                        </div>
                        <div className="text-sm text-gray-500">Antioksidan</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">
                          Saponin
                        </div>
                        <div className="text-sm text-gray-500">Antibakteri</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-600">
                          Tanin
                        </div>
                        <div className="text-sm text-gray-500">
                          Antiinflamasi
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Award className="w-5 h-5 text-yellow-600" />
                      <span className="font-semibold text-yellow-800">
                        Terbukti Ilmiah
                      </span>
                    </div>
                    <p className="text-yellow-700 text-sm">
                      Efektif menghambat pertumbuhan bakteri Staphylococcus
                      aureus, penyebab utama infeksi pada sariawan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="cara-kerja"
        className="py-20 bg-gradient-to-b from-blue-50 to-green-50"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-green-900">
              Cara Kerja STOMAPATCH
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mekanisme aksi ganda yang memberikan perlindungan dan penyembuhan
              optimal
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 bg-white shadow-lg border-0">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-800">
                      Aksi Pertama
                    </h3>
                    <p className="text-blue-600">Perlindungan Mukoadhesif</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Sifat mukoadhesif STOMAPATCH menciptakan lapisan pelindung
                    yang kuat di atas luka sariawan.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">
                        Memisahkan luka dari gesekan makanan
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">
                        Melindungi dari air liur yang dapat mengiritasi
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">
                        Menciptakan lingkungan penyembuhan optimal
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white shadow-lg border-0">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-800">
                      Aksi Kedua
                    </h3>
                    <p className="text-green-600">Penyembuhan Herbal</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Zat aktif dari ekstrak herbal bekerja secara bertahap untuk
                    mempercepat penyembuhan.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">
                        Menghambat pertumbuhan bakteri berbahaya
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">
                        Mengurangi peradangan dan pembengkakan
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">
                        Mempercepat regenerasi jaringan
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-center text-green-800 mb-8">
              Timeline Penyembuhan
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-800">0-2 Jam</h4>
                  <p className="text-sm text-gray-600">
                    Perlindungan instan dan pengurangan rasa sakit
                  </p>
                </div>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-green-800">6-12 Jam</h4>
                  <p className="text-sm text-gray-600">
                    Aksi antibakteri mulai bekerja optimal
                  </p>
                </div>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-purple-800">1-2 Hari</h4>
                  <p className="text-sm text-gray-600">
                    Peradangan berkurang signifikan
                  </p>
                </div>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-bold text-yellow-800">3-5 Hari</h4>
                  <p className="text-sm text-gray-600">Penyembuhan sempurna</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Instructions */}
      <section id="penggunaan" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-green-900">
              Cara Penggunaan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Panduan langkah-demi-langkah yang mudah diikuti untuk hasil
              optimal
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Bersihkan Area Sariawan
                  </h3>
                  <p className="text-gray-600">
                    Cuci tangan hingga bersih, lalu bilas mulut dengan air
                    hangat. Keringkan area sekitar sariawan dengan lembut
                    menggunakan tisu bersih.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">
                    Buka Kemasan dengan Hati-hati
                  </h3>
                  <p className="text-gray-600">
                    Sobek kemasan steril STOMAPATCH dari sudut yang telah
                    ditandai. Hindari menyentuh bagian patch yang akan menempel
                    pada luka.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-800 mb-2">
                    Tempelkan pada Sariawan
                  </h3>
                  <p className="text-gray-600">
                    Tempelkan patch langsung di atas sariawan dengan tekanan
                    lembut selama 10-15 detik. Pastikan patch menempel dengan
                    baik di seluruh permukaan luka.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-800 mb-2">
                    Biarkan Bekerja
                  </h3>
                  <p className="text-gray-600">
                    Patch dapat bertahan hingga 8-12 jam. Hindari makan atau
                    minum 30 menit pertama setelah pemasangan untuk hasil
                    optimal.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-8">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Cara Penggunaan STOMAPATCH"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                Mudah & Praktis!
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-green-50 border-green-200">
              <CardContent className="p-0 text-center">
                <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-green-800 mb-2">
                  Durasi Penggunaan
                </h3>
                <p className="text-green-700">
                  8-12 jam per patch atau hingga patch terlepas sendiri
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 bg-blue-50 border-blue-200">
              <CardContent className="p-0 text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-blue-800 mb-2">
                  Aman untuk Semua Usia
                </h3>
                <p className="text-blue-700">
                  Dapat digunakan oleh anak-anak di atas 3 tahun hingga dewasa
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 bg-purple-50 border-purple-200">
              <CardContent className="p-0 text-center">
                <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-purple-800 mb-2">
                  Frekuensi Penggunaan
                </h3>
                <p className="text-purple-700">
                  Ganti patch baru setiap 8-12 jam hingga sariawan sembuh
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-green-900">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-xl text-gray-600">
              Temukan jawaban untuk pertanyaan umum tentang STOMAPATCH
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-white rounded-lg border-0 shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-green-800 hover:no-underline">
                Apakah STOMAPATCH aman untuk anak-anak?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Ya, STOMAPATCH aman digunakan untuk anak-anak di atas 3 tahun.
                Formula herbal alami dan teknologi hidrogel yang hypoallergenic
                membuatnya cocok untuk kulit sensitif anak-anak. Namun, untuk
                anak di bawah 3 tahun, sebaiknya konsultasikan dengan dokter
                terlebih dahulu.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-white rounded-lg border-0 shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-green-800 hover:no-underline">
                Berapa lama patch harus menempel pada luka?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                STOMAPATCH dirancang untuk bertahan 8-12 jam dalam satu kali
                penggunaan. Patch akan terlepas secara alami ketika sudah
                waktunya diganti. Jika patch terlepas lebih cepat, Anda dapat
                mengganti dengan patch baru. Untuk hasil optimal, gunakan patch
                baru setiap 8-12 jam hingga sariawan sembuh sempurna.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-white rounded-lg border-0 shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-green-800 hover:no-underline">
                Apakah akan terasa sakit saat patch dilepas?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Tidak, STOMAPATCH dirancang dengan teknologi mukoadhesif yang
                memberikan daya rekat optimal namun mudah dilepas tanpa rasa
                sakit. Patch akan terlepas secara alami atau dapat dilepas
                dengan lembut tanpa menyebabkan trauma pada jaringan yang sedang
                dalam proses penyembuhan.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-white rounded-lg border-0 shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-green-800 hover:no-underline">
                Di mana saya bisa membeli STOMAPATCH?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                STOMAPATCH tersedia di apotek-apotek terpercaya di seluruh
                Indonesia dan platform e-commerce seperti Tokopedia, Shopee, dan
                Blibli. Anda juga dapat menggunakan fitur pencari lokasi di
                website kami untuk menemukan apotek terdekat yang menjual
                STOMAPATCH.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-white rounded-lg border-0 shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-green-800 hover:no-underline">
                Apakah produk ini sudah terdaftar di BPOM?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Ya, STOMAPATCH telah terdaftar resmi di BPOM RI dengan nomor
                registrasi yang dapat Anda lihat pada kemasan produk. Produk ini
                telah melalui serangkaian uji keamanan dan efektivitas yang
                ketat sesuai standar regulasi Indonesia, sehingga aman dan
                terjamin kualitasnya.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="bg-white rounded-lg border-0 shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-green-800 hover:no-underline">
                Berapa lama waktu yang dibutuhkan untuk menyembuhkan sariawan?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Dengan penggunaan STOMAPATCH secara teratur, sariawan umumnya
                akan sembuh dalam 3-5 hari. Namun, waktu penyembuhan dapat
                bervariasi tergantung pada ukuran dan tingkat keparahan
                sariawan, serta kondisi kesehatan individu. Untuk sariawan yang
                lebih besar atau persisten, konsultasikan dengan dokter.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-green-900">
              Testimoni Pengguna
            </h2>
            <p className="text-xl text-gray-600">
              Dengarkan pengalaman nyata dari pengguna STOMAPATCH
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Sariawan saya yang biasanya sembuh seminggu, dengan
                  STOMAPATCH hanya 3 hari sudah hilang! Patch-nya juga tidak
                  terasa mengganggu saat makan."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">Sari Dewi</h4>
                    <p className="text-sm text-gray-600">
                      Ibu Rumah Tangga, Jakarta
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Sebagai mahasiswa yang sering begadang, sariawan jadi
                  langganan. STOMAPATCH benar-benar membantu saya tetap fokus
                  kuliah tanpa terganggu rasa sakit."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    R
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800">
                      Rizki Pratama
                    </h4>
                    <p className="text-sm text-gray-600">Mahasiswa, Bandung</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Anak saya yang berusia 5 tahun sering sariawan. STOMAPATCH
                  sangat membantu karena tidak perlu repot minum obat dan anak
                  tidak rewel."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800">Maya Sari</h4>
                    <p className="text-sm text-gray-600">
                      Ibu Bekerja, Surabaya
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-yellow-50 px-6 py-3 rounded-full border border-yellow-200">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-yellow-800">
                4.8/5 Rating
              </span>
              <span className="text-yellow-600">dari 1,200+ ulasan</span>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Section */}
      <section
        id="beli"
        className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold">Dapatkan STOMAPATCH Sekarang</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Jangan biarkan sariawan mengganggu aktivitas Anda. Dapatkan solusi
              cerdas dan efektif hari ini juga!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Hubungi Kami</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Button className="bg-white text-orange-600 hover:bg-gray-100 h-12">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Shopee
                  </Button>
                  <Button className="bg-white text-black hover:bg-gray-100 h-12">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    TikTok
                  </Button>
                  <Button className="bg-white text-green-600 hover:bg-gray-100 h-12">
                    <Phone className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Button>
                  <Button className="bg-white text-pink-600 hover:bg-gray-100 h-12">
                    <Users className="w-5 h-5 mr-2" />
                    Instagram
                  </Button>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Harga Spesial</h3>
                <div className="flex items-baseline space-x-2 mb-4">
                  <span className="text-4xl font-bold">Rp 25.000</span>
                  <span className="text-xl opacity-75 line-through">
                    Rp 35.000
                  </span>
                </div>
                <p className="opacity-90">Per box (isi 6 patch) - Hemat 28%!</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Mengapa Memilih STOMAPATCH?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                    <span>Terdaftar resmi BPOM RI</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                    <span>Teknologi hidrogel terdepan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                    <span>100% bahan herbal alami</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                    <span>Terbukti efektif dalam 3-5 hari</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                    <span>Aman untuk semua usia</span>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-white text-green-600 hover:bg-gray-100 text-xl py-6"
              >
                <ShoppingCart className="w-6 h-6 mr-3" />
                Beli Sekarang - Gratis Ongkir!
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">STOMAPATCH</span>
              </div>
              <p className="text-gray-400">
                Solusi cerdas dan alami untuk sariawan dengan teknologi hidrogel
                herbal terdepan.
              </p>
              <div className="flex items-center space-x-2 text-green-400">
                <Award className="w-5 h-5" />
                <span className="font-semibold">BPOM RI No: TR123456789</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Produk</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#produk"
                    className="hover:text-white transition-colors"
                  >
                    Tentang STOMAPATCH
                  </a>
                </li>
                <li>
                  <a
                    href="#cara-kerja"
                    className="hover:text-white transition-colors"
                  >
                    Cara Kerja
                  </a>
                </li>
                <li>
                  <a
                    href="#penggunaan"
                    className="hover:text-white transition-colors"
                  >
                    Cara Penggunaan
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Media Sosial</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Shopee
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    TikTok
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Kontak</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>+62 21 1234 5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>info@stomapatch.co.id</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>Jakarta, Indonesia</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 STOMAPATCH. Semua hak cipta dilindungi.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Syarat & Ketentuan
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Kebijakan Privasi
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const services = [
    { name: "Классическое наращивание", price: "2500 ₽", duration: "2 часа", description: "Натуральный объем 1:1" },
    { name: "2D объем", price: "3500 ₽", duration: "2.5 часа", description: "Легкий объем для ежедневной носки" },
    { name: "3D объем", price: "4000 ₽", duration: "3 часа", description: "Выразительный взгляд" },
    { name: "Голливудский объем", price: "5000 ₽", duration: "3.5 часа", description: "Максимальный объем и драма" },
    { name: "Коррекция", price: "2000 ₽", duration: "1.5 часа", description: "Поддержание идеального вида" },
    { name: "Снятие ресниц", price: "800 ₽", duration: "30 мин", description: "Безопасное снятие" }
  ];

  const portfolioItems = [
    { id: 1, image: "/img/14bdc791-c403-41c8-9667-cbc0419dae8f.jpg", category: "classic", title: "Классическое наращивание" },
    { id: 2, image: "/img/aff40e45-2481-4082-bfbe-ba207732d89b.jpg", category: "volume", title: "Объемное наращивание" },
    { id: 3, image: "/img/ff9e9771-5f82-4f89-9422-5a65ec9efad2.jpg", category: "hollywood", title: "Голливудский объем" },
  ];

  const filteredPortfolio = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-pearl">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gold/20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-montserrat font-bold text-2xl text-charcoal">
            LIVE STYLE
          </div>
          <div className="hidden md:flex space-x-8 font-open-sans">
            <a href="#home" className="text-charcoal hover:text-gold transition-colors">Главная</a>
            <a href="#services" className="text-charcoal hover:text-gold transition-colors">Услуги</a>
            <a href="#portfolio" className="text-charcoal hover:text-gold transition-colors">Портфолио</a>
            <a href="#prices" className="text-charcoal hover:text-gold transition-colors">Прайс</a>
            <a href="#contact" className="text-charcoal hover:text-gold transition-colors">Контакты</a>
          </div>
          <Button className="bg-gold hover:bg-gold/90 text-charcoal font-medium">
            Записаться
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 to-charcoal/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/img/ff9e9771-5f82-4f89-9422-5a65ec9efad2.jpg')` }}
        ></div>
        
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-montserrat text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Идеальные<br />
            <span className="text-gold">Ресницы</span>
          </h1>
          <p className="font-open-sans text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Профессиональное наращивание ресниц с гарантией качества. 
            Создаем неповторимый образ, подчеркивающий вашу естественную красоту.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-charcoal font-medium px-8 py-6 text-lg">
              <Icon name="Calendar" className="mr-2" size={20} />
              Записаться онлайн
            </Button>
            <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-charcoal px-8 py-6 text-lg">
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-4xl font-bold text-charcoal mb-4">
              Наши услуги
            </h2>
            <p className="font-open-sans text-lg text-charcoal/70 max-w-2xl mx-auto">
              Предлагаем полный спектр услуг по наращиванию ресниц с использованием премиальных материалов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-gold/20 hover:border-gold/40">
                <CardHeader>
                  <CardTitle className="font-montserrat text-charcoal flex items-center justify-between">
                    {service.name}
                    <Badge variant="secondary" className="bg-gold/10 text-gold">
                      {service.duration}
                    </Badge>
                  </CardTitle>
                  <CardDescription className="font-open-sans">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="font-montserrat text-2xl font-bold text-gold">
                      {service.price}
                    </span>
                    <Button variant="outline" size="sm" className="border-gold text-gold hover:bg-gold hover:text-charcoal">
                      Выбрать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-pearl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-4xl font-bold text-charcoal mb-4">
              Портфолио работ
            </h2>
            <p className="font-open-sans text-lg text-charcoal/70 mb-8">
              Результаты до и после наращивания ресниц
            </p>

            <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-full">
              <TabsList className="grid w-fit mx-auto grid-cols-4 bg-white border border-gold/20">
                <TabsTrigger value="all" className="data-[state=active]:bg-gold data-[state=active]:text-charcoal">
                  Все работы
                </TabsTrigger>
                <TabsTrigger value="classic" className="data-[state=active]:bg-gold data-[state=active]:text-charcoal">
                  Классика
                </TabsTrigger>
                <TabsTrigger value="volume" className="data-[state=active]:bg-gold data-[state=active]:text-charcoal">
                  Объем
                </TabsTrigger>
                <TabsTrigger value="hollywood" className="data-[state=active]:bg-gold data-[state=active]:text-charcoal">
                  Голливуд
                </TabsTrigger>
              </TabsList>

              <TabsContent value={activeFilter} className="mt-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPortfolio.map((item) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                      <div className="relative overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="font-montserrat text-white font-semibold">{item.title}</h3>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-charcoal text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-montserrat text-4xl font-bold mb-6">
                Запишитесь на консультацию
              </h2>
              <p className="font-open-sans text-lg text-white/80 mb-8">
                Свяжитесь с нами для записи или консультации. Мы ответим на все ваши вопросы 
                и подберем идеальный образ именно для вас.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" size={24} className="text-gold" />
                  <span className="font-open-sans">г. Москва, ул. Красивая, д. 15</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" size={24} className="text-gold" />
                  <span className="font-open-sans">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Clock" size={24} className="text-gold" />
                  <span className="font-open-sans">Ежедневно с 9:00 до 21:00</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Instagram" size={24} className="text-gold" />
                  <span className="font-open-sans">@lash_studio_moscow</span>
                </div>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur border-gold/20">
              <CardHeader>
                <CardTitle className="font-montserrat text-white">Быстрая запись</CardTitle>
                <CardDescription className="text-white/70">
                  Оставьте заявку и мы свяжемся с вами в течение 15 минут
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gold/20 text-white placeholder-white/50 focus:border-gold focus:outline-none"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gold/20 text-white placeholder-white/50 focus:border-gold focus:outline-none"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gold/20 text-white focus:border-gold focus:outline-none">
                    <option value="">Выберите услугу</option>
                    <option value="classic">Классическое наращивание</option>
                    <option value="2d">2D объем</option>
                    <option value="3d">3D объем</option>
                    <option value="hollywood">Голливудский объем</option>
                  </select>
                </div>
                <Button className="w-full bg-gold hover:bg-gold/90 text-charcoal font-semibold py-3">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal border-t border-gold/20 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="font-montserrat text-2xl font-bold text-gold mb-4">
            LIVE STYLE
          </div>
          <p className="font-open-sans text-white/70 mb-4">
            Профессиональное наращивание ресниц в Москве
          </p>
          <div className="flex justify-center space-x-6 text-white/50">
            <a href="#" className="hover:text-gold transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              <Icon name="Phone" size={24} />
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              <Icon name="Mail" size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
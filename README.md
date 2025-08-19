
# React Native Projects Monorepo

Bu monorepo, birden fazla React Native projesini tek bir repository'de barındırır.

## 📱 Projeler

### 🎯 GoalApp
Hedef takip uygulaması - kullanıcıların hedeflerini ekleyip takip edebileceği bir uygulama.

**Özellikler:**
- Hedef ekleme
- Hedef listeleme
- Hedef silme
- Modal ile hedef girişi

**Çalıştırma:**
```bash
npm run start:goal
npm run android:goal
npm run ios:goal
```

## 🚀 Kurulum

```bash
# Tüm bağımlılıkları yükle
npm run install:all

# GoalApp'i başlat
npm run start:goal
```

## 📁 Proje Yapısı

```
├── apps/
│   └── GoalApp/          # Hedef takip uygulaması
│       ├── App.js
│       ├── components/
│       ├── assets/
│       └── ...
├── shared/               # Paylaşılan bileşenler ve yardımcılar
│   ├── components/       # Ortak UI bileşenleri
│   ├── utils/           # Yardımcı fonksiyonlar
│   └── constants/       # Sabitler
└── package.json         # Ana monorepo konfigürasyonu
```
## UI
<h2>Goal App IOS UI PREVIEW</h2>
<div>
  <img  width="300" height="650" alt="image" src="https://github.com/user-attachments/assets/de5da1a5-fdb7-4380-b9c3-318054f33a46" />
<img width="300" height="650"alt="image" src="https://github.com/user-attachments/assets/f8503768-41cf-46a7-ba0e-0d97a471b3aa" />
</div>
## 🛠️ Geliştirme

### Yeni Proje Ekleme
1. `apps/` klasörü altında yeni proje klasörü oluştur
2. Ana `package.json`'a yeni script'ler ekle
3. `workspaces` listesine ekle

### Paylaşılan Bileşenler
Ortak kullanılan bileşenleri `shared/components/` klasörüne taşı.

## 📝 Script'ler

- `npm run start:goal` - GoalApp'i başlat
- `npm run android:goal` - GoalApp'i Android'de çalıştır
- `npm run ios:goal` - GoalApp'i iOS'ta çalıştır
- `npm run install:all` - Tüm bağımlılıkları yükle
- `npm run clean` - Tüm node_modules'ları temizle

## 🤝 Katkıda Bulunma

1. Bu repository'yi fork et
2. Feature branch oluştur (`git checkout -b feature/amazing-feature`)
3. Değişikliklerini commit et (`git commit -m 'Add amazing feature'`)
4. Branch'ini push et (`git push origin feature/amazing-feature`)
5. Pull Request oluştur

## 📄 Lisans

MIT License

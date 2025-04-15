### Các bước để dùng Gmail SMTP

#### **1. Bật xác minh 2 bước cho Gmail**
- Truy cập: https://myaccount.google.com/security
- Ở mục **“Signing in to Google”**, bật **2-Step Verification** (nếu chưa bật).

#### **2. Tạo App Password**
- Vào: https://myaccount.google.com/apppasswords
- Chọn:
  - **App**: chọn “Mail”
  - **Device**: chọn “Other (Custom name)” → gõ ví dụ “nodemailer”
- Google sẽ tạo cho bạn một **mật khẩu 16 ký tự** → **sao chép nó ngay!** (vì không hiện lại lần sau)



# Có các cách sau để tạo smtp
## Dùng gmail, outlook: tên người dùng google, không phải mail doanh nghiệp, không cho gửi hàng loạt, không rơi vào spam
## Dùng smtp server của hosting: trong cpanel: hạn chế, dễ bị cho vào spam
## Tự host mail server (Postfix, Mailcow, Mailu...): Bắt buộc phải host trên vps, thì mạng nhà không mở cổng smtp, và địa chỉ ip động, không chạy được, thiếu tin cậy
## Dùng dịch vụ từ các bên tự host mail server khác: giá đắt
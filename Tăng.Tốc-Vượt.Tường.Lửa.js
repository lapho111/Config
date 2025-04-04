# Shadowrocket: 2025-04-04 08:57:43
[General]
bypass-system = true
skip-proxy = 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, localhost, *.local, captive.apple.com,vietcombank.com.vn, bidv.com.vn, vietinbank.vn, acb.com.vn, tpbank.vn, techcombank.com.vn, mbbank.com.vn, vpbank.com.vn, shb.com.vn, sacombank.com.vn, hdbank.com.vn, zalopay.vn, momo.vn, shopeepay.vn, vnpay.vn, payoo.vn, viettelmoney.vn, ahamove.com, grab.com, be.com.vn, goship.io, giaohangtietkiem.vn, giaohangnhanh.vn, viettelpost.com.vn, chinhphu.vn, dichvucong.gov.vn, gdt.gov.vn, bhxh.gov.vn, moh.gov.vn, mofa.gov.vn, customs.gov.vn
tun-excluded-routes = 10.0.0.0/8, 100.64.0.0/10, 127.0.0.0/8, 169.254.0.0/16, 172.16.0.0/12, 192.0.0.0/24, 192.0.2.0/24, 192.88.99.0/24, 192.168.0.0/16, 198.51.100.0/24, 203.0.113.0/24, 224.0.0.0/4, 255.255.255.255/32, 239.255.255.250/32
dns-server = 1.1.1.1, 8.8.8.8, 8.8.4.4, 9.9.9.9
fallback-dns-server = 208.67.222.222, 208.67.220.220
ipv6 = false
prefer-ipv6 = false
dns-direct-system = false
icmp-auto-reply = true
always-reject-url-rewrite = false
private-ip-answer = true
dns-direct-fallback-proxy = true
udp-policy-not-supported-behaviour = DIRECT

[Rule]
# Ngân Hàng
DOMAIN-SUFFIX,bidv.com.vn,DIRECT
DOMAIN-SUFFIX,vietcombank.com.vn,DIRECT
DOMAIN-SUFFIX,vpbank.com.vn,DIRECT
DOMAIN-SUFFIX,techcombank.com.vn,DIRECT
DOMAIN-SUFFIX,tpb.vn,DIRECT
DOMAIN-SUFFIX,mbbank.com.vn,DIRECT
DOMAIN-SUFFIX,acb.com.vn,DIRECT
DOMAIN-SUFFIX,shb.com.vn,DIRECT
# Ví điện tử
DOMAIN-SUFFIX,momo.vn,DIRECT
DOMAIN-SUFFIX,zalopay.vn,DIRECT
DOMAIN-SUFFIX,shopeepay.vn,DIRECT
# Dịch Vụ Công
DOMAIN-SUFFIX,dichvucong.gov.vn,DIRECT
DOMAIN-SUFFIX,thuedientu.gdt.gov.vn,DIRECT
DOMAIN-SUFFIX,baohiemxahoi.gov.vn,DIRECT
DOMAIN-SUFFIX,dichvucong.bhxv.vn,DIRECT
DOMAIN-SUFFIX,hanoi.gov.vn,DIRECT
DOMAIN-SUFFIX,hochiminhcity.gov.vn,DIRECT
# Ship
DOMAIN-SUFFIX,ahamove.com,DIRECT
DOMAIN-SUFFIX,grab.com,DIRECT
DOMAIN-SUFFIX,be.com.vn,DIRECT
DOMAIN-SUFFIX,giaohangtietkiem.vn,DIRECT
DOMAIN-SUFFIX,giaohangnhanh.vn,DIRECT
DOMAIN-SUFFIX,lalamove.com,DIRECT

# Facebook & Messenger
DOMAIN-SUFFIX,facebook.com,DIRECT
DOMAIN-SUFFIX,messenger.com,DIRECT
DOMAIN-SUFFIX,fb.com,DIRECT
DOMAIN-SUFFIX,fbcdn.net,DIRECT
DOMAIN-SUFFIX,instagram.com,DIRECT
DOMAIN-SUFFIX,cdninstagram.com,DIRECT
DOMAIN-SUFFIX,whatsapp.com,DIRECT
DOMAIN-SUFFIX,whatsapp.net,DIRECT
DOMAIN-SUFFIX,fbsbx.com,DIRECT
DOMAIN-SUFFIX,fbstatic-a.akamaihd.net,DIRECT
IP-CIDR,31.13.24.0/21,PROXY,no-resolve
IP-CIDR,31.13.64.0/18,PROXY,no-resolve
IP-CIDR,69.63.176.0/20,PROXY,no-resolve
IP-CIDR,69.171.224.0/19,PROXY,no-resolve
IP-CIDR,173.252.64.0/18,PROXY,no-resolve
IP-CIDR,185.60.216.0/22,PROXY,no-resolve
IP-CIDR,157.240.0.0/16,PROXY,no-resolve
IP-CIDR,2A03:2880:F12F:8F:FACE:B00C::/48,PROXY,no-resolve
# Zalo
DOMAIN-SUFFIX,zalo.me,DIRECT
DOMAIN-SUFFIX,zalo.vn,DIRECT
DOMAIN-SUFFIX,zaloapp.com,DIRECT
DOMAIN-SUFFIX,zalopay.vn,DIRECT
DOMAIN-SUFFIX,zalo.cloud,DIRECT
# TikTok
DOMAIN-SUFFIX,tiktok.com,DIRECT
DOMAIN-SUFFIX,tiktokcdn.com,DIRECT
DOMAIN-SUFFIX,tiktokv.com,DIRECT
DOMAIN-SUFFIX,byteoversea.com,DIRECT
DOMAIN-SUFFIX,musical.ly,DIRECT
# Telegram
DOMAIN-SUFFIX,t.me,PROXY
DOMAIN-SUFFIX,tdesktop.com,PROXY
DOMAIN-SUFFIX,telegra.ph,PROXY
DOMAIN-SUFFIX,telegram.me,PROXY
DOMAIN-SUFFIX,telegram.org,PROXY
DOMAIN-SUFFIX,telesco.pe,PROXY
IP-CIDR,91.108.4.0/22,PROXY,no-resolve
IP-CIDR,91.108.8.0/22,PROXY,no-resolve
IP-CIDR,91.108.12.0/22,PROXY,no-resolve
IP-CIDR,91.108.16.0/22,PROXY,no-resolve
IP-CIDR,91.108.56.0/22,PROXY,no-resolve
IP-CIDR,109.239.140.0/24,PROXY,no-resolve
IP-CIDR,149.154.160.0/20,PROXY,no-resolve
IP-CIDR,2001:B28:F23D::/48,PROXY,no-resolve
IP-CIDR,2001:B28:F23F::/48,PROXY,no-resolve
IP-CIDR,2001:67C:4E8::/48,PROXY,no-resolve
# X (Twitter)
DOMAIN-SUFFIX,x.com,DIRECT
DOMAIN-SUFFIX,twitter.com,DIRECT
DOMAIN-SUFFIX,twimg.com,DIRECT
# Instagram
DOMAIN-SUFFIX,instagram.com,DIRECT
DOMAIN-SUFFIX,cdninstagram.com,DIRECT
# Free Fire (Garena)
DOMAIN-SUFFIX,freefire.garena.com,DIRECT
DOMAIN-SUFFIX,freefire.garena.vn,DIRECT
DOMAIN-SUFFIX,garena.com,DIRECT
DOMAIN-SUFFIX,garena.vn,DIRECT
DOMAIN-SUFFIX,ff.garena.com,DIRECT
DOMAIN-SUFFIX,ff.garena.vn,DIRECT
DOMAIN-SUFFIX,freefiremobile.com,DIRECT
DOMAIN-SUFFIX,cdn.garena.com,DIRECT
DOMAIN-SUFFIX,game.garena.com,DIRECT
# Liên Quân Mobile (Garena)
DOMAIN-SUFFIX,lienquan.garena.com,DIRECT
DOMAIN-SUFFIX,lienquan.garena.vn,DIRECT
DOMAIN-SUFFIX,aov.garena.com,DIRECT
DOMAIN-SUFFIX,aov.garena.vn,DIRECT
DOMAIN-SUFFIX,garena.com,DIRECT
DOMAIN-SUFFIX,garena.vn,DIRECT
DOMAIN-SUFFIX,cdn.garena.com,DIRECT
DOMAIN-SUFFIX,game.garena.com,DIRECT
DOMAIN-SUFFIX,aovmobile.com,DIRECT
DOMAIN-SUFFIX,live.garena.com,DIRECT
DOMAIN-SUFFIX,store.garena.com,DIRECT
DOMAIN-SUFFIX,support.garena.com,DIRECT
DOMAIN-SUFFIX,forum.garena.com,DIRECT
DOMAIN-SUFFIX,patch.garena.com,DIRECT
DOMAIN-SUFFIX,player.garena.com,DIRECT
DOMAIN-SUFFIX,download.garena.com,DIRECT
# Google
DOMAIN-SUFFIX,google.com,DIRECT
DOMAIN-SUFFIX,google.vn,DIRECT
DOMAIN-SUFFIX,googleusercontent.com,DIRECT
DOMAIN-SUFFIX,googleapis.com,DIRECT
DOMAIN-SUFFIX,gstatic.com,DIRECT
DOMAIN-SUFFIX,ggpht.com,DIRECT
DOMAIN-SUFFIX,googleusercontent.com,DIRECT
DOMAIN-SUFFIX,drive.google.com,DIRECT
DOMAIN-SUFFIX,docs.google.com,DIRECT
DOMAIN-SUFFIX,sheets.google.com,DIRECT
DOMAIN-SUFFIX,slides.google.com,DIRECT
DOMAIN-SUFFIX,calendar.google.com,DIRECT
DOMAIN-SUFFIX,mail.google.com,DIRECT
DOMAIN-SUFFIX,play.google.com,DIRECT
DOMAIN-SUFFIX,news.google.com,DIRECT
DOMAIN-SUFFIX,translate.google.com,DIRECT
DOMAIN-SUFFIX,hangouts.google.com,DIRECT
DOMAIN-SUFFIX,meet.google.com,DIRECT
DOMAIN-SUFFIX,youtube.com,DIRECT
DOMAIN-SUFFIX,youtu.be,DIRECT
DOMAIN-SUFFIX,blogger.com,DIRECT
DOMAIN-SUFFIX,googleadservices.com,DIRECT
DOMAIN-SUFFIX,google.com.hk,DIRECT
DOMAIN-SUFFIX,search.google.com,DIRECT
DOMAIN-SUFFIX,fonts.gstatic.com,DIRECT
DOMAIN-SUFFIX,firebase.google.com,DIRECT
DOMAIN-SUFFIX,assistant.google.com,DIRECT
DOMAIN-SUFFIX,photos.google.com,DIRECT
DOMAIN-SUFFIX,one.google.com,DIRECT
DOMAIN-SUFFIX,store.google.com,DIRECT
# ChatGPT (OpenAI)
DOMAIN-SUFFIX,openai.com,DIRECT
DOMAIN-SUFFIX,chat.openai.com,DIRECT
DOMAIN-SUFFIX,oaistatic.com,DIRECT
DOMAIN-SUFFIX,oaiusercontent.com,DIRECT
DOMAIN-SUFFIX,openaicom-api-bdcpf8c6d2e9atf6.z01.azurefd.net,DIRECT
DOMAIN-SUFFIX,openaicomproductionae4b.blob.core.windows.net,DIRECT
DOMAIN-SUFFIX,platform.openai.com,DIRECT
DOMAIN-SUFFIX,cdn.openai.com,DIRECT
DOMAIN-SUFFIX,api.openai.com,DIRECT
# Grok (xAI)
DOMAIN-SUFFIX,x.ai,DIRECT
DOMAIN-SUFFIX,chat.x.ai,DIRECT
DOMAIN-SUFFIX,grok.x.ai,DIRECT
DOMAIN-SUFFIX,api.x.ai,DIRECT
DOMAIN-SUFFIX,x.ai-production.com,DIRECT
# NASA
DOMAIN-SUFFIX,nasa.gov,DIRECT
DOMAIN-SUFFIX,images.nasa.gov,DIRECT
DOMAIN-SUFFIX,api.nasa.gov,DIRECT
DOMAIN-SUFFIX,spacex.nasa.gov,DIRECT
DOMAIN-SUFFIX,archive.nasa.gov,DIRECT
DOMAIN-SUFFIX,solarsystem.nasa.gov,DIRECT
DOMAIN-SUFFIX,science.nasa.gov,DIRECT
DOMAIN-SUFFIX,heavens-above.nasa.gov,DIRECT
DOMAIN-SUFFIX,marshall.nasa.gov,DIRECT
DOMAIN-SUFFIX,langley.nasa.gov,DIRECT
DOMAIN-SUFFIX,glenn.nasa.gov,DIRECT
DOMAIN-SUFFIX,jpl.nasa.gov,DIRECT
DOMAIN-SUFFIX,ccsds.nasa.gov,DIRECT
DOMAIN-SUFFIX,climate.nasa.gov,DIRECT
DOMAIN-SUFFIX,earthobservatory.nasa.gov,DIRECT
DOMAIN-SUFFIX,exoplanets.nasa.gov,DIRECT
DOMAIN-SUFFIX,webb.nasa.gov,DIRECT
DOMAIN-SUFFIX,video.nasa.gov,DIRECT
DOMAIN-SUFFIX,nasascience.nasa.gov,DIRECT
DOMAIN-SUFFIX,nasastory.nasa.gov,DIRECT
# Hago
DOMAIN-SUFFIX,hago.vn,DIRECT
DOMAIN-SUFFIX,hago.com,DIRECT
DOMAIN-SUFFIX,api.hago.vn,DIRECT
DOMAIN-SUFFIX,cdn.hago.vn,DIRECT
DOMAIN-SUFFIX,game.hago.vn,DIRECT
DOMAIN-SUFFIX,play.hago.vn,DIRECT

# AhaMove
DOMAIN-SUFFIX,microsoft.com,DIRECT
DOMAIN-SUFFIX,live.com,DIRECT
DOMAIN-SUFFIX,outlook.com,DIRECT
DOMAIN-SUFFIX,office.com,DIRECT
DOMAIN-SUFFIX,onedrive.com,DIRECT
DOMAIN-SUFFIX,skype.com,DIRECT
DOMAIN-SUFFIX,xbox.com,DIRECT
DOMAIN-SUFFIX,bing.com,DIRECT
DOMAIN-SUFFIX,msft.com,DIRECT
DOMAIN-SUFFIX,github.com,DIRECT
DOMAIN-SUFFIX,sharepoint.com,DIRECT
DOMAIN-SUFFIX,teams.microsoft.com,DIRECT
DOMAIN-SUFFIX,visualstudio.com,DIRECT
DOMAIN-SUFFIX,security.microsoft.com,DIRECT
# Alight Motion
DOMAIN-SUFFIX,alightmotion.com,DIRECT
DOMAIN-SUFFIX,alightmotion.app,DIRECT
DOMAIN-SUFFIX,cdn.alightmotion.com,DIRECT
DOMAIN-SUFFIX,media.alightmotion.com,DIRECT
DOMAIN-SUFFIX,assets.alightmotion.com,DIRECT
# CapCut
DOMAIN-SUFFIX,capcut.com,DIRECT
DOMAIN-SUFFIX,capcut.net,DIRECT
DOMAIN-SUFFIX,capcut.cn,DIRECT
DOMAIN-SUFFIX,cdn.capcut.com,DIRECT
DOMAIN-SUFFIX,assets.capcut.com,DIRECT
DOMAIN-SUFFIX,video.capcut.com,DIRECT
DOMAIN-SUFFIX,service.capcut.com,DIRECT
DOMAIN-SUFFIX,media.capcut.com,DIRECT
# Gemini.AI (DeepMind)
DOMAIN-SUFFIX,gemini.google.com,DIRECT
DOMAIN-SUFFIX,gemini.ai,DIRECT
DOMAIN-SUFFIX,ai.gemini.com,DIRECT
DOMAIN-SUFFIX,api.gemini.com,DIRECT
DOMAIN-SUFFIX,cdn.gemini.com,DIRECT
DOMAIN-SUFFIX,media.gemini.com,DIRECT
DOMAIN-SUFFIX,assets.gemini.com,DIRECT
DOMAIN-SUFFIX,ai.google.com,DIRECT
# Douyin
DOMAIN-SUFFIX,douyin.com,DIRECT
DOMAIN-SUFFIX,douyin.cn,DIRECT
DOMAIN-SUFFIX,beian.douyin.com,DIRECT
DOMAIN-SUFFIX,aweme.com,DIRECT
DOMAIN-SUFFIX,maodou.com,DIRECT
DOMAIN-SUFFIX,maoyan.com,DIRECT
DOMAIN-SUFFIX,ifeng.com,DIRECT
DOMAIN-SUFFIX,ixigua.com,DIRECT
DOMAIN-SUFFIX,topbuzz.com,DIRECT

# Các Nền Tảng Người Lớn
DOMAIN-SUFFIX,tubesafari.com,PROXY
DOMAIN-SUFFIX,eporner.com,PROXY
DOMAIN-SUFFIX,rule34.xxx,PROXY
DOMAIN-SUFFIX,motherless.com,PROXY
DOMAIN-SUFFIX,tnaflix.com,PROXY
DOMAIN-SUFFIX,keezmovies.com,PROXY
DOMAIN-SUFFIX,porn.com,PROXY
DOMAIN-SUFFIX,beeg.com,PROXY
DOMAIN-SUFFIX,drtuber.com,PROXY
DOMAIN-SUFFIX,yuvutu.com,PROXY
DOMAIN-SUFFIX,pornhub.com,PROXY
DOMAIN-SUFFIX,xvideos.com,PROXY
DOMAIN-SUFFIX,xhamster.com,PROXY
DOMAIN-SUFFIX,redtube.com,PROXY
DOMAIN-SUFFIX,youporn.com,PROXY
DOMAIN-SUFFIX,brazzers.com,PROXY
DOMAIN-SUFFIX,realitykings.com,PROXY
DOMAIN-SUFFIX,bangbros.com,PROXY
DOMAIN-SUFFIX,naughtyamerica.com,PROXY
DOMAIN-SUFFIX,spankbang.com,PROXY
DOMAIN-SUFFIX,cliphot.com,PROXY
DOMAIN-SUFFIX,heysex3x.com,PROXY
DOMAIN-SUFFIX,fapdu.com,PROXY
DOMAIN-SUFFIX,vporn.com,PROXY
DOMAIN-SUFFIX,pornohub.com,PROXY
DOMAIN-SUFFIX,youporn.com,PROXY
DOMAIN-SUFFIX,youporn.eu,PROXY
DOMAIN-SUFFIX,xnxx.com,PROXY
DOMAIN-SUFFIX,fapfinder.com,PROXY
DOMAIN-SUFFIX,sextu.com,PROXY
DOMAIN-SUFFIX,eromax.com,PROXY
DOMAIN-SUFFIX,nubiles.com,PROXY
DOMAIN-SUFFIX,cam4.com,PROXY
DOMAIN-SUFFIX,chaturbate.com,PROXY
DOMAIN-SUFFIX,mydirtyhobby.com,PROXY
DOMAIN-SUFFIX,bongacams.com,PROXY
DOMAIN-SUFFIX,livejasmin.com,PROXY
DOMAIN-SUFFIX,streamate.com,PROXY
DOMAIN-SUFFIX,twistys.com,PROXY
DOMAIN-SUFFIX,sexvid.com,PROXY
DOMAIN-SUFFIX,tushy.com,PROXY
# Phim Lậu
DOMAIN-SUFFIX,fmovies.to,PROXY
DOMAIN-SUFFIX,123movies.to,PROXY
DOMAIN-SUFFIX,123movies.is,PROXY
DOMAIN-SUFFIX,putlocker.vip,PROXY
DOMAIN-SUFFIX,solarmovie.to,PROXY
DOMAIN-SUFFIX,watchserieshd.cc,PROXY
DOMAIN-SUFFIX,gomovies.to,PROXY
DOMAIN-SUFFIX,yesmovies.io,PROXY
DOMAIN-SUFFIX,primewire.ag,PROXY
DOMAIN-SUFFIX,movie4k.to,PROXY
DOMAIN-SUFFIX,123movieshub.to,PROXY
DOMAIN-SUFFIX,rainierland.is,PROXY
DOMAIN-SUFFIX,streamlord.com,PROXY
DOMAIN-SUFFIX,bmovies.to,PROXY
DOMAIN-SUFFIX,watchfree.to,PROXY
DOMAIN-SUFFIX,cinemay.com,PROXY
DOMAIN-SUFFIX,vumoo.to,PROXY

[MITM]
ca-passphrase = Shadowrocket
ca-p12 = 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
enable = true

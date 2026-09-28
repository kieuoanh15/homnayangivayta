import { CategoryInfo, CategoryType, Dish } from '../types';

import imgComTam from '../assets/images/com_tam_1790441943907.jpg';
import imgComGa from '../assets/images/com_ga_1790441957699.jpg';
import imgComChien from '../assets/images/com_chien_1790441971797.jpg';
import imgComSuon from '../assets/images/com_suon_1790441986500.jpg';
import imgPhoBo from '../assets/images/pho_bo_1790442001182.jpg';
import imgPhoGa from '../assets/images/pho_ga_1790442014322.jpg';
import imgBunBoHue from '../assets/images/bun_bo_hue_1790442036045.jpg';
import imgBunThitNuong from '../assets/images/bun_thit_nuong_1790442050875.jpg';
import imgBunRieu from '../assets/images/bun_rieu_1790442064603.jpg';
import imgHuTieu from '../assets/images/hu_tieu_1790442078173.jpg';
import imgMiXao from '../assets/images/mi_xao_1790442093469.jpg';
import imgBanhMiThit from '../assets/images/banh_mi_thit_1790442107181.jpg';
import imgBanhMiXiuMai from '../assets/images/banh_mi_xiu_mai_1790442121038.jpg';
import imgBunDauMamTom from '../assets/images/bun_dau_mam_tom_1790442140227.jpg';
import imgGaRan from '../assets/images/ga_ran_1790442154324.jpg';
import imgGoiCuon from '../assets/images/goi_cuon_1790442168417.jpg';
import imgBanhTrangTron from '../assets/images/banh_trang_tron_1790441924358.jpg';
import imgChaLui from '../assets/images/cha_lui_1790442182291.jpg';
import imgLauThai from '../assets/images/lau_thai_1790442195444.jpg';
import imgTraSua from '../assets/images/tra_sua_1790442209432.jpg';
import imgBunCha from '../assets/images/bun_cha_1790517594232.jpg';
import imgBanhXeo from '../assets/images/banh_xeo_1790517610563.jpg';
import imgBanhCuon from '../assets/images/banh_cuon_1790517631309.jpg';
import imgBoNe from '../assets/images/bo_ne_1790517645556.jpg';
import imgComGaXoiMo from '../assets/images/com_ga_xoi_mo_1790517660447.jpg';
import imgMiQuang from '../assets/images/mi_quang_1790517676418.jpg';
import imgBanhTrangNuong from '../assets/images/banh_trang_nuong_1790517691832.jpg';
import imgBunCa from '../assets/images/bun_ca_1790517713410.jpg';
import imgBanhMiChao from '../assets/images/banh_mi_chao_1790517728620.jpg';
import imgBanhFlan from '../assets/images/banh_flan_1790517749989.jpg';
import imgComNieu from '../assets/images/com_nieu_1790518617396.jpg';
import imgComBoLucLac from '../assets/images/com_bo_luc_lac_1790518632843.jpg';
import imgComThitKho from '../assets/images/com_thit_kho_1790518646427.jpg';
import imgBunMam from '../assets/images/bun_mam_1790518660873.jpg';
import imgMienGa from '../assets/images/mien_ga_1790518674699.jpg';
import imgMienTron from '../assets/images/mien_tron_1790518698878.jpg';
import imgBanhKhot from '../assets/images/banh_khot_1790518716127.jpg';
import imgBanhCan from '../assets/images/banh_can_1790518736494.jpg';
import imgBoLucLac from '../assets/images/bo_luc_lac_1790518746649.jpg';
import imgLauBo from '../assets/images/lau_bo_1790518770542.jpg';
import imgLauGaLaE from '../assets/images/lau_ga_la_e_1790518789172.jpg';
import imgLauKimChi from '../assets/images/lau_kim_chi_1790518806332.jpg';
import imgGaNuong from '../assets/images/ga_nuong_1790518826108.jpg';
import imgSuonNuong from '../assets/images/suon_nuong_1790518844464.jpg';
import imgKimbap from '../assets/images/kimbap_1790518862622.jpg';
import imgTokbokki from '../assets/images/tokbokki_1790518880751.jpg';
import imgMiCay from '../assets/images/mi_cay_1790518895384.jpg';
import imgCheKhucBach from '../assets/images/che_khuc_bach_1790518912105.jpg';
import imgCheBuoi from '../assets/images/che_buoi_1790518927343.jpg';
import imgTraiCayTo from '../assets/images/trai_cay_to_1790518946950.jpg';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'rice',
    name: 'Cơm',
    icon: '🍚',
    color: '#F97316',
    badgeBg: 'bg-orange-100',
    textColor: 'text-orange-700'
  },
  {
    id: 'noodle',
    name: 'Bún / Phở',
    icon: '🍜',
    color: '#EF4444',
    badgeBg: 'bg-rose-100',
    textColor: 'text-rose-700'
  },
  {
    id: 'bread',
    name: 'Bánh / Mì',
    icon: '🥖',
    color: '#D97706',
    badgeBg: 'bg-amber-100',
    textColor: 'text-amber-800'
  },
  {
    id: 'fastfood',
    name: 'Món ăn nhanh',
    icon: '🍗',
    color: '#EA580C',
    badgeBg: 'bg-red-100',
    textColor: 'text-red-700'
  },
  {
    id: 'snack',
    name: 'Ăn vặt',
    icon: '🌶️',
    color: '#10B981',
    badgeBg: 'bg-emerald-100',
    textColor: 'text-emerald-700'
  },
  {
    id: 'hotpot',
    name: 'Lẩu',
    icon: '🍲',
    color: '#E11D48',
    badgeBg: 'bg-pink-100',
    textColor: 'text-pink-700'
  },
  {
    id: 'dessert',
    name: 'Tráng miệng',
    icon: '🍧',
    color: '#8B5CF6',
    badgeBg: 'bg-purple-100',
    textColor: 'text-purple-700'
  }
];

export const DISHES: Dish[] = [
  {
    id: 'com-tam',
    name: 'Cơm tấm',
    category: 'rice',
    priceRange: '35.000đ - 65.000đ',
    minPrice: 35000,
    maxPrice: 65000,
    rating: 4.9,
    reviewCount: 382,
    image: imgComTam,
    shortDesc: 'Cơm tấm sườn nướng than hoa thơm lừng mỡ hành tóp mỡ, đậm đà Sài Gòn.',
    fullDesc: 'Món ăn quốc dân đường phố của người Sài Gòn và khắp mọi miền. Hạt gạo tấm dẻo bùi đặc trưng, sườn nướng sốt mật ong cháy cạnh trên than hồng thơm nức mũi, ăn kèm chả trứng béo ngậy, bì dai giòn, mỡ hành óng ả và chén nước mắm chua ngọt keo sệt.',
    mainIngredients: [
      'Gạo tấm dẻo thơm',
      'Sườn cốt lết ướp sả ớt nướng than',
      'Chả trứng hấp mộc nhĩ thịt xay',
      'Bì heo trộn thính gạo',
      'Mỡ hành lá tươi & tóp mỡ giòn',
      'Trứng ốp la lòng đào',
      'Đồ chua củ cải cà rốt',
      'Nước mắm tỏi ớt kẹo'
    ],
    orderTips: [
      'Nên dặn nướng miếng sườn vừa chín tới để không bị khô.',
      'Xin thêm mỡ hành và tóp mỡ giòn không tính thêm tiền ở đa số quán.',
      'Chan nước mắm quanh đĩa cơm và thêm một muỗng ớt sa tế cay nồng.'
    ],
    bestTime: ['Sáng', 'Trưa', 'Tối', 'Ăn khuya'],
    tag: 'Món quốc dân',
    isPopular: true
  },
  {
    id: 'com-ga',
    name: 'Cơm gà',
    category: 'rice',
    priceRange: '40.000đ - 60.000đ',
    minPrice: 40000,
    maxPrice: 60000,
    rating: 4.8,
    reviewCount: 245,
    image: imgComGa,
    shortDesc: 'Cơm gà vàng óng nghệ, thịt gà xé da giòn trộn rau răm hành tây the mát.',
    fullDesc: 'Đặc sản trứ danh từ Hội An và Nha Trang. Hạt cơm được nấu bằng nước luộc gà béo ngậy và chút bột nghệ vàng óng ả. Gà ta thả vườn thịt chắc, ngọt thơm được xé sợi bóp gỏi rau răm tươi cay nồng, ăn cùng nước chấm gừng tỏi ớt đậm đà.',
    mainIngredients: [
      'Cơm nấu nước luộc gà và nghệ tươi',
      'Thịt gà ta thả vườn xé phay hoặc đùi chặt',
      'Hành tây thái mỏng ngâm chua ngọt',
      'Rau răm tươi cắt nhỏ',
      'Đồ chua đu đủ cà rốt',
      'Chén canh gà lá giang hoặc hành hoa',
      'Nước chấm gừng tỏi ớt chua ngọt'
    ],
    orderTips: [
      'Chọn gà xé nếu thích vị đậm đà ngấm gia vị bóp gỏi, chọn đùi góc tư nếu thích da giòn thịt đẫm.',
      'Trộn đều tương ớt xào miền Trung với cơm để bùng vị giác.'
    ],
    bestTime: ['Trưa', 'Tối'],
    tag: 'Thơm béo dẻo ngọt',
    isPopular: true
  },
  {
    id: 'com-chien',
    name: 'Cơm chiên',
    category: 'rice',
    priceRange: '30.000đ - 50.000đ',
    minPrice: 30000,
    maxPrice: 50000,
    rating: 4.7,
    reviewCount: 198,
    image: imgComChien,
    shortDesc: 'Cơm chiên chảo lớn dậy mùi khói wok hei, hạt tơi xốp giòn rụm.',
    fullDesc: 'Món ăn nhanh gọn, no căng bụng được ưa chuộng bậc nhất ngoài quán bình dân. Cơm nguội được rang trên chảo gang lửa lớn cuốn theo hơi khói đặc trưng (wok hei), áo đều lớp trứng gà vàng ruộm, quyện cùng lạp xưởng béo bùi, tôm ngọt, đậu Hà Lan và cà rốt giòn ngọt.',
    mainIngredients: [
      'Cơm trắng hạt tơi rang ráo',
      'Trứng gà tươi đánh đều áo hạt cơm',
      'Lạp xưởng Mai Quế Lộ thái hạt lựu',
      'Tôm tươi hoặc tôm khô xào thơm',
      'Đậu Hà Lan, ngô ngọt và cà rốt',
      'Hành hoa phi thơm nức mũi',
      'Nước tương tỏi ớt dằm cay'
    ],
    orderTips: [
      'Yêu cầu chiên khô hạt giòn nếu bạn thích cảm giác nhai lách tách vui miệng.',
      'Thêm một quả trứng ốp la lòng đào chảy lên trên cơm nóng sốt.'
    ],
    bestTime: ['Trưa', 'Tối', 'Ăn khuya'],
    tag: 'No lâu đậm vị',
    isPopular: false
  },
  {
    id: 'com-suon',
    name: 'Cơm sườn',
    category: 'rice',
    priceRange: '35.000đ - 55.000đ',
    minPrice: 35000,
    maxPrice: 55000,
    rating: 4.8,
    reviewCount: 260,
    image: imgComSuon,
    shortDesc: 'Sườn cây hoặc sườn cốt lết nướng mật ong óng ả, cơm dẻo nóng hổi.',
    fullDesc: 'Món cơm quen thuộc mỗi bữa trưa công sở hay bữa chiều tan làm. Từng dẻ sườn được tẩm ướp ngũ vị hương, sả băm, mật ong và sữa đặc nướng chín đều, giữ trọn độ mọng nước bên trong và lớp men caramen óng ả bên ngoài.',
    mainIngredients: [
      'Cơm trắng dẻo thơm hạt dài',
      'Sườn non nướng mật ong sả ớt',
      'Dưa leo mát lạnh và cà chua xắt lát',
      'Đồ chua củ cải giòn ngọt',
      'Mỡ hành lá thơm ngào ngạt',
      'Canh súp thịt bằm thanh mát'
    ],
    orderTips: [
      'Nên chọn quán có lò than nướng trực tiếp phía trước để ăn lúc sườn vừa rời vỉ nướng.',
      'Chấm đẫm sườn vào nước mắm ớt dằm cay xé lưỡi.'
    ],
    bestTime: ['Sáng', 'Trưa', 'Tối'],
    tag: 'Đậm đà đưa cơm',
    isPopular: false
  },
  {
    id: 'pho-bo',
    name: 'Phở bò',
    category: 'noodle',
    priceRange: '40.000đ - 70.000đ',
    minPrice: 40000,
    maxPrice: 70000,
    rating: 4.9,
    reviewCount: 512,
    image: imgPhoBo,
    shortDesc: 'Tinh hoa ẩm thực Việt với nước dùng xương ống ninh 12 tiếng, thơm thảo mộc.',
    fullDesc: 'Biểu tượng ẩm thực Việt Nam nức tiếng toàn cầu. Nước dùng trong veo, thơm nức hương quế, hồi, thảo quả và gừng nướng ninh cùng xương bò nguyên tủy. Bánh phở mướt mềm, thịt bò tái lăn mềm ngọt tan chảy trong miệng hòa quyện cùng hành hoa, chanh ớt và quẩy giòn tan.',
    mainIngredients: [
      'Bánh phở tươi mỏng mềm',
      'Thịt bò tái nạc mềm & nạm bò giòn sần sật',
      'Gầu bò thơm béo ngậy',
      'Nước dùng xương bò hầm thảo mộc',
      'Hành hoa, hành tây thái mỏng, ngò gai',
      'Chanh tươi, ớt hiểm, dấm tỏi ớt',
      'Quẩy giòn rụm ăn kèm'
    ],
    orderTips: [
      'Gọi tô "Tái Nạm Gầu Nước Béo" nếu muốn thưởng thức trọn vẹn vị béo ngậy.',
      'Ăn cùng quẩy giòn nhúng ngập nước dùng nóng hổi là combo chuẩn bài nhất.'
    ],
    bestTime: ['Sáng', 'Tối', 'Ăn khuya'],
    tag: 'Tinh hoa Việt Nam',
    isPopular: true
  },
  {
    id: 'pho-ga',
    name: 'Phở gà',
    category: 'noodle',
    priceRange: '40.000đ - 65.000đ',
    minPrice: 40000,
    maxPrice: 65000,
    rating: 4.8,
    reviewCount: 220,
    image: imgPhoGa,
    shortDesc: 'Nước dùng gà thanh trong váng mỡ vàng, lá chanh thơm ngát và thịt gà da giòn.',
    fullDesc: 'Lựa chọn nhẹ nhàng, thanh tao mà đầy tinh tế. Nước dùng gà ninh ngọt tự nhiên không gắt, bánh phở mềm ngập trong nước dùng ấm bụng. Thịt gà ta da giòn sần sật thái miếng vừa ăn, rắc thêm chút lá chanh thái chỉ thơm the mũi, chấm muối tiêu chanh ớt thơm lừng.',
    mainIngredients: [
      'Bánh phở sợi mềm tươi mới',
      'Thịt gà đùi hoặc ức gà luộc xé vừa miếng',
      'Da gà vàng ươm giòn sần sật',
      'Lá chanh bánh tẻ thái chỉ siêu mỏng',
      'Nước dùng xương gà hầm thanh ngọt',
      'Hành lá, mùi ta xắt nhỏ',
      'Gia vị chấm: Muối tiêu chanh ớt tươi'
    ],
    orderTips: [
      'Gọi "Phở gà đùi da giòn" để có trải nghiệm thịt mọng nước và lớp da béo ngậy.',
      'Đừng quên xin thêm chén tiết luộc mềm mượt và dĩa lòng mề thơm ngon.'
    ],
    bestTime: ['Sáng', 'Trưa', 'Tối'],
    tag: 'Thanh tao ấm bụng',
    isPopular: false
  },
  {
    id: 'bun-bo-hue',
    name: 'Bún bò Huế',
    category: 'noodle',
    priceRange: '45.000đ - 70.000đ',
    minPrice: 45000,
    maxPrice: 70000,
    rating: 4.9,
    reviewCount: 420,
    image: imgBunBoHue,
    shortDesc: 'Vị cay nồng sa tế sả ớt, mắm ruốc thơm lừng và sợi bún to tròn chuẩn Cố Đô.',
    fullDesc: 'Món bún đậm đà bậc nhất với hương vị mắm ruốc Huế dậy mùi đặc trưng, nước dùng đỏ cam óng ánh màu dầu hạt điều và sả đập dập thơm nức. Bát bún đầy đặn với bắp bò hoa giòn, chả cua Huế béo ngậy, khoanh giò heo mềm rục và rau chuối bào tươi mát.',
    mainIngredients: [
      'Bún sợi to tròn dẻo dai',
      'Nước dùng hầm xương bò & mắm ruốc Cố Đô',
      'Bắp bò thái lát vân hoa',
      'Chả cua Huế giã nhuyễn thơm ngọt',
      'Khoanh giò heo ninh mềm béo',
      'Chả lụa hoặc chả bò giòn ngọt',
      'Huyết heo luộc mềm mọng',
      'Rau sống: Hoa chuối bào, giá đỗ, rau muống chẻ, húng quế'
    ],
    orderTips: [
      'Thêm một muỗng sa tế ớt rim Huế để nước dùng dậy mùi cay the xộc lên mũi đã miệng.',
      'Vắt nửa quả chanh để cân bằng vị mặn mà của mắm ruốc.'
    ],
    bestTime: ['Sáng', 'Trưa', 'Tối'],
    tag: 'Đậm vị miền Trung',
    isPopular: true
  },
  {
    id: 'bun-thit-nuong',
    name: 'Bún thịt nướng',
    category: 'noodle',
    priceRange: '35.000đ - 55.000đ',
    minPrice: 35000,
    maxPrice: 55000,
    rating: 4.8,
    reviewCount: 310,
    image: imgBunThitNuong,
    shortDesc: 'Thịt nướng sả mè thơm phức, chả giò giòn tan quyện nước mắm chua ngọt.',
    fullDesc: 'Món ăn khô thanh mát rất thích hợp cho những ngày nắng ấm. Từng xiên thịt heo ướp sả ớt, mè rang nướng trên than củi vàng xém bên ngoài, mọng nước bên trong. Ăn cùng sợi bún tươi trắng ngần, chả giò chiên vàng giòn rụm, rau sống xanh mướt, đậu phộng rang bùi bùi và chén nước mắm chua ngọt vừa vặn.',
    mainIngredients: [
      'Bún tươi sợi nhỏ mát lạnh',
      'Thịt nạc vai heo ướp sả mè nướng than',
      'Chả giò (nem rán) nhân tôm thịt giòn rụm',
      'Đậu phộng rang giã dập & mỡ hành',
      'Rau xà lách, rau thơm, dưa leo băm nhỏ',
      'Đồ chua củ cải cà rốt giòn ngọt',
      'Nước mắm tỏi ớt chua ngọt chan ngập'
    ],
    orderTips: [
      'Chan đều chén nước mắm từ từ rồi trộn tung cả tô bún lên để ngấm đều rau và thịt.',
      'Gọi thêm một cuốn chả giò nóng hổi giòn rụm ăn kèm.'
    ],
    bestTime: ['Trưa', 'Tối', 'Ăn xế'],
    tag: 'Thanh mát dễ ăn',
    isPopular: true
  },
  {
    id: 'bun-rieu',
    name: 'Bún riêu',
    category: 'noodle',
    priceRange: '35.000đ - 60.000đ',
    minPrice: 35000,
    maxPrice: 60000,
    rating: 4.8,
    reviewCount: 275,
    image: imgBunRieu,
    shortDesc: 'Gạch cua đồng béo bùi, cà chua đỏ mọng vị chua dịu từ giấm bỗng.',
    fullDesc: 'Món bún cua đồng mộc mạc dân dã làm say lòng thực khách. Vị chua dịu nhẹ từ giấm bỗng nếp lên men tự nhiên hòa cùng màu đỏ cam bắt mắt của cà chua tươi. Miếng riêu cua đóng bánh mềm thơm, đậu hũ rán vàng phồng giòn ngập nước dùng, thêm chút ốc giòn sần sật hoặc giò tai.',
    mainIngredients: [
      'Bún gạo trắng mềm',
      'Riêu cua đồng tươi giã nhuyễn đóng bánh',
      'Đậu hũ rán vàng ruộm thấm nước dùng',
      'Cà chua chín mọng xào mềm',
      'Huyết heo & giò tai heo',
      'Nước dùng giấm bỗng chua dịu ngọt xương',
      'Rau sống: Kinh giới, xà lách thái chỉ, hoa chuối, mắm tôm'
    ],
    orderTips: [
      'Nêm nửa thìa mắm tôm sống vào tô lúc nước còn sôi sùng sục để hương thơm bùng nổ.',
      'Rau kinh giới và ớt chưng là linh hồn không thể thiếu của món bún riêu.'
    ],
    bestTime: ['Sáng', 'Trưa', 'Tối'],
    tag: 'Chua thanh mát dạ',
    isPopular: false
  },
  {
    id: 'hu-tieu',
    name: 'Hủ tiếu',
    category: 'noodle',
    priceRange: '35.000đ - 60.000đ',
    minPrice: 35000,
    maxPrice: 60000,
    rating: 4.8,
    reviewCount: 330,
    image: imgHuTieu,
    shortDesc: 'Sợi hủ tiếu dai giòn ngọt nước hầm mực nướng, tôm tươi và thịt bằm tóp mỡ.',
    fullDesc: 'Món ăn quen thuộc từ xe hủ tiếu gõ đường phố đến nhà hàng Nam Vang trứ danh. Sợi bánh hủ tiếu dai trong veo được trụng vừa tới, chan nước dùng ngọt lịm nấu từ xương ống và mực nướng. Topping phong phú với thịt bằm xào, tôm tươi lột vỏ, trứng cút, tim cật và tóp mỡ chiên giòn rụm.',
    mainIngredients: [
      'Sợi hủ tiếu dai Sa Đéc hoặc hủ tiếu mềm',
      'Thịt heo bằm xào thơm & thịt xá xíu thái lát',
      'Tôm sú tươi ngọt thịt',
      'Trứng cút luộc trắng nõn',
      'Tóp mỡ giòn rụm tẩm tỏi phi',
      'Hẹ lá, cần tây, giá đỗ tươi',
      'Nước dùng xương hầm mực khô ngọt thanh'
    ],
    orderTips: [
      'Nên thử "Hủ tiếu khô": sợi mì trộn sốt tương đen đặc sánh, kèm theo chén nước dùng riêng.',
      'Xin thêm tóp mỡ hành phi nếu bạn là tín đồ của vị béo giòn.'
    ],
    bestTime: ['Sáng', 'Tối', 'Ăn khuya'],
    tag: 'Đậm chất miền Nam',
    isPopular: true
  },
  {
    id: 'mi-xao',
    name: 'Mì xào',
    category: 'bread',
    priceRange: '35.000đ - 55.000đ',
    minPrice: 35000,
    maxPrice: 55000,
    rating: 4.6,
    reviewCount: 164,
    image: imgMiXao,
    shortDesc: 'Mì trứng xào mềm hoặc giòn rụm, ngập tràn thịt bò, tôm và rau cải thìa.',
    fullDesc: 'Món mì nhanh gọn, xì xèo trên chảo lửa ngoài các quán xá quen thuộc. Có hai phiên bản được ưa chuộng: mì xào mềm dai dai thấm đẫm sốt dầu hào thơm lừng, hoặc mì xào giòn tổ chim phồng xốp chan sốt thịt bò xào sệt nóng hổi, rau củ giòn ngọt ngập tràn năng lượng.',
    mainIngredients: [
      'Mì trứng vàng ươm (chiên giòn hoặc xào mềm)',
      'Thịt bò thăn ướp tỏi gừng xào mềm mọng',
      'Tôm tươi bóc nõn',
      'Rau cải thìa, cải ngọt xanh mướt',
      'Cà rốt, hành tây, nấm đông cô thái sợi',
      'Sốt xào dầu hào dầu mè bóng bẩy',
      'Tiêu sọ xay nhuyễn cay nồng'
    ],
    orderTips: [
      'Nếu gọi mì xào giòn, hãy ăn ngay khi dọn ra để sợi mì giữ được độ giòn rôm rốp rộn rã.',
      'Chấm cùng tương ớt cay hoặc xì dầu tỏi ớt cắt lát.'
    ],
    bestTime: ['Trưa', 'Tối', 'Ăn khuya'],
    tag: 'Nóng hổi vừa thổi vừa ăn',
    isPopular: false
  },
  {
    id: 'banh-mi-thit',
    name: 'Bánh mì thịt',
    category: 'bread',
    priceRange: '20.000đ - 40.000đ',
    minPrice: 20000,
    maxPrice: 40000,
    rating: 4.9,
    reviewCount: 620,
    image: imgBanhMiThit,
    shortDesc: 'Vỏ bánh mì giòn rụm vỡ tan, nhân pate gan béo ngậy, chả lụa và đồ chua.',
    fullDesc: 'Vua của thức ăn đường phố thế giới. Chiếc bánh mì nóng hổi giòn rụm vỏ ngoài, ruột xốp mềm. Bên trong quết lớp pate gan béo ngậy nhà làm, bơ trứng vàng ngậy, xếp đầy chả lụa thơm ngát, thịt heo quay hoặc xíu mại, kẹp thêm dưa leo mát giòn, đồ chua củ cải cà rốt, ngò rí và vài lát ớt hiểm cay xè.',
    mainIngredients: [
      'Ổ bánh mì Việt Nam vỏ siêu giòn, ruột xốp',
      'Pate gan heo béo bùi thơm ngậy',
      'Bơ thơm sốt trứng gà đánh tươi',
      'Chả lụa heo truyền thống thái lát',
      'Thịt xá xíu hoặc thịt nguội đỏ',
      'Dưa leo mát giòn & ngò rí (rau mùi)',
      'Đồ chua cà rốt củ cải giòn ngọt',
      'Nước sốt thịt đậm đà & ớt hiểm cay'
    ],
    orderTips: [
      'Dặn người bán nướng lại bánh trên lò than hoặc máy ép nóng trước khi ăn.',
      'Nhớ nhắc cho "nhiều pate ít bơ" hoặc "nhiều ớt" tùy theo khẩu vị cá nhân.'
    ],
    bestTime: ['Sáng', 'Trưa', 'Tối', 'Ăn xế', 'Ăn khuya'],
    tag: 'Siêu sao thế giới',
    isPopular: true
  },
  {
    id: 'banh-mi-xiu-mai',
    name: 'Bánh mì xíu mại',
    category: 'bread',
    priceRange: '25.000đ - 45.000đ',
    minPrice: 25000,
    maxPrice: 45000,
    rating: 4.8,
    reviewCount: 215,
    image: imgBanhMiXiuMai,
    shortDesc: 'Viên xíu mại mềm tan trong chén sốt cà chua nghi ngút khói, chấm bánh mì giòn.',
    fullDesc: 'Món ăn sáng trứ danh xứ lạnh Đà Lạt và khắp phố phường miền Nam. Viên thịt xíu mại được vo tròn với củ sắn giòn ngọt, ninh trong nồi nước sốt cà chua trong ngọt đậm đà từ xương. Chén xíu mại dọn ra nóng hổi, rắc thêm hành lá, sa tế ớt cay sè và miếng da heo giòn sần sật, chấm ngập ổ bánh mì giòn rụm.',
    mainIngredients: [
      'Bánh mì nóng hổi giòn tan',
      'Viên xíu mại thịt nạc dăm trộn củ sắn mềm ngọt',
      'Nước dùng xương hầm sốt cà chua ấm nóng',
      'Da heo hầm mềm béo giòn',
      'Hành hoa thái nhỏ rắc mặt chén',
      'Sa tế ớt tươi rim cay nồng xé lưỡi',
      'Chả lụa cắt lát ăn kèm'
    ],
    orderTips: [
      'Xé nhỏ bánh mì nhúng đẫm vào chén sốt nóng hổi cho bánh ngậm đủ vị ngọt thịt.',
      'Cho nhiều sa tế nếu bạn thích cảm giác vừa ăn vừa xuýt xoa ấm người.'
    ],
    bestTime: ['Sáng', 'Tối', 'Ăn xế'],
    tag: 'Ấm lòng ngày se lạnh',
    isPopular: false
  },
  {
    id: 'bun-dau-mam-tom',
    name: 'Bún đậu mắm tôm',
    category: 'fastfood',
    priceRange: '40.000đ - 70.000đ',
    minPrice: 40000,
    maxPrice: 70000,
    rating: 4.9,
    reviewCount: 460,
    image: imgBunDauMamTom,
    shortDesc: 'Mẹt tre bún lá, đậu hũ lướt ván giòn rụm, chả cốm dẻo thơm và mắm tôm bông bọt.',
    fullDesc: 'Món ăn gây nghiện bậc nhất với chiếc mẹt tre lót lá chuối dân dã. Từng miếng đậu hũ Mơ rán lướt ván ngoài giòn trong béo mềm như kem, chả cốm dẻo quánh thơm mùi cốm non, thịt chân giò luộc thái lát mỏng tang, nem chua rán nóng hổi. Tất cả chấm cùng chén mắm tôm Thanh Hóa đánh bông cùng đường, quất tươi và ớt hiểm cay.',
    mainIngredients: [
      'Bún lá ép chặt cắt miếng vuông vức',
      'Đậu hũ non rán vàng giòn lướt ván',
      'Chả cốm Hà Nội dẻo thơm hạt cốm non',
      'Thịt bắp giò luộc mềm béo thái mỏng',
      'Nem chua rán hoặc dồi sụn nướng thơm',
      'Mắm tôm nguyên chất đánh bông bọt cùng tắc và đường',
      'Rau kinh giới, tía tô, dưa chuột thái lát'
    ],
    orderTips: [
      'Vắt 2-3 trái quất (tắc), thêm đường và một muỗng dầu rán sôi vào chén mắm tôm, đánh thật mạnh tay cho sủi bông bọt trắng mịn.',
      'Nếu không ăn được mắm tôm, bạn luôn có thể gọi nước mắm chua ngọt thay thế.'
    ],
    bestTime: ['Trưa', 'Tối'],
    tag: 'Gây nghiện cực mạnh',
    isPopular: true
  },
  {
    id: 'ga-ran',
    name: 'Gà rán',
    category: 'fastfood',
    priceRange: '35.000đ - 75.000đ',
    minPrice: 35000,
    maxPrice: 75000,
    rating: 4.7,
    reviewCount: 380,
    image: imgGaRan,
    shortDesc: 'Miếng gà rán vàng ruộm giòn tan rôm rốp, thịt bên trong mềm mọng thơm ngậy.',
    fullDesc: 'Lựa chọn khoái khẩu của giới trẻ mỗi khi cần một bữa ăn nhanh giòn tan bùng nổ. Lớp bột chiên xù vàng óng bên ngoài cắn vào giòn rôm rốp, giữ nguyên độ ngọt thịt và mọng nước bên trong. Ăn kèm khoai tây chiên giòn, tương ớt cay ngọt hoặc sốt phô mai béo ngậy.',
    mainIngredients: [
      'Đùi hoặc cánh gà tươi tẩm ướp thảo mộc',
      'Lớp bột chiên xù giòn tan phủ vảy vàng',
      'Khoai tây chiên lắc phô mai hoặc bơ đường',
      'Sốt tương cà và tương ớt cay ngọt',
      'Salad bắp cải sốt mayonnaise chua dịu'
    ],
    orderTips: [
      'Nên chọn gà sốt cay mật ong hoặc sốt tỏi đậu kiểu Hàn nếu thích vị đậm đà.',
      'Ăn lúc vừa chiên xong nóng bỏng tay để cảm nhận độ giòn tuyệt đối.'
    ],
    bestTime: ['Trưa', 'Tối', 'Ăn xế', 'Ăn khuya'],
    tag: 'Giòn tan bùng nổ',
    isPopular: true
  },
  {
    id: 'goi-cuon',
    name: 'Gỏi cuốn',
    category: 'snack',
    priceRange: '20.000đ - 35.000đ',
    minPrice: 20000,
    maxPrice: 35000,
    rating: 4.8,
    reviewCount: 195,
    image: imgGoiCuon,
    shortDesc: 'Tôm thịt lộ rõ qua lớp bánh tráng mỏng, cuộn bún rau thơm chấm tương đậu phộng.',
    fullDesc: 'Món ăn vặt thanh đạm được mệnh danh là một trong những món ăn lành mạnh nhất thế giới. Lớp bánh tráng dẻo mỏng manh trong suốt khoe khéo lưng tôm đỏ au và lát thịt ba chỉ luộc. Cuộn chặt tay cùng bún tươi, hẹ xanh, xà lách và rau thơm, chấm ngập chén tương hột băm nhuyễn nấu cùng bơ đậu phộng béo bùi.',
    mainIngredients: [
      'Bánh tráng dẻo mềm nguyên chất',
      'Tôm sú tươi luộc đỏ au bóc vỏ',
      'Thịt ba rọi (thịt ba chỉ) luộc mỏng',
      'Bún tươi sợi nhỏ',
      'Rau xà lách, rau thơm, cọng hẹ tươi nhú ra ngoài',
      'Nước chấm: Tương đen đậu phộng béo bùi rắc hành phi & đậu phộng'
    ],
    orderTips: [
      'Tương chấm đậu phộng là linh hồn của gỏi cuốn, nhớ xin thêm ớt băm và đồ chua bỏ vào tương.',
      'Gọi từ 3-4 cuốn là đủ cho một bữa xế chiều no nhẹ bụng.'
    ],
    bestTime: ['Ăn xế', 'Tối'],
    tag: 'Thanh đạm tươi mát',
    isPopular: false
  },
  {
    id: 'banh-trang-tron',
    name: 'Bánh tráng trộn',
    category: 'snack',
    priceRange: '15.000đ - 30.000đ',
    minPrice: 15000,
    maxPrice: 30000,
    rating: 4.9,
    reviewCount: 450,
    image: imgBanhTrangTron,
    shortDesc: 'Vua ăn vặt vỉa hè: xoài xanh, trứng cút, khô bò xé, muối tôm và sa tế hành phi.',
    fullDesc: 'Món ăn vặt số 1 gắn liền với bao thế hệ học sinh sinh viên Việt Nam. Từng dải bánh tráng cắt sợi dai mềm ngấm đều nước sốt bò cay ngọt, tắc chua thanh, muối tôm Tây Ninh mặn mòi, hòa quyện cùng xoài xanh giòn sần sật, rau răm cay nồng, khô bò nâu sẫm, trứng cút bùi béo và đậu phộng rang giòn thơm lừng.',
    mainIngredients: [
      'Bánh tráng sợi mềm dẻo ngấm sốt',
      'Xoài xanh bào sợi giòn chua ngọt',
      'Khô bò đen & khô mực sợi dai ngon',
      'Trứng cút luộc hoặc chiên vàng',
      'Rau răm tươi cắt nhuyễn the the',
      'Muối tôm Tây Ninh hảo hạng',
      'Hành phi vàng ruộm & đậu phộng rang giòn',
      'Nước sốt tắc khô bò sa tế cay ngọt'
    ],
    orderTips: [
      'Nên ăn ngay trong vòng 20 phút sau khi trộn để sợi bánh tráng giữ độ dẻo dai, không bị nhão.',
      'Nhắc người bán mức độ cay yêu thích nếu không quen ăn cay xé lưỡi.'
    ],
    bestTime: ['Ăn xế', 'Tối', 'Ăn khuya'],
    tag: 'Huyền thoại đường phố',
    isPopular: true
  },
  {
    id: 'cha-lui',
    name: 'Chả lụi',
    category: 'snack',
    priceRange: '25.000đ - 45.000đ',
    minPrice: 25000,
    maxPrice: 45000,
    rating: 4.7,
    reviewCount: 168,
    image: imgChaLui,
    shortDesc: 'Chả lụi nướng xiên giòn rụm bên vỉ than hồng, cuốn bánh tráng rau rừng tươi non.',
    fullDesc: 'Đặc sản nổi danh bắt nguồn từ vùng biển Lagi Bình Thuận và phố núi Tây Nguyên. Nhân tôm thịt băm nhuyễn được gói trong miếng bánh tráng nhỏ hình chữ nhật, xâu vào que tre rồi nướng vàng rộm trên than hồng kêu xèo xèo. Cuốn cùng bánh tráng dẻo, xoài sống, dưa leo, rau thơm và chấm sốt đậu phộng cà chua sền sệt béo ngọt.',
    mainIngredients: [
      'Chả lụi gói tôm thịt nướng than giòn rụm',
      'Bánh tráng mỏng dẻo để cuốn',
      'Xoài keo xanh bào lát mỏng',
      'Dưa leo mát lạnh, khế chua',
      'Rau sống đủ loại: Xà lách, tía tô, húng quế',
      'Nước sốt chấm đậu phộng màu cam ấm nóng, sánh mịn'
    ],
    orderTips: [
      'Một cuốn chuẩn bài: 1 miếng bánh tráng + rau thơm + xoài chua + 1 que chả lụi giòn + cuộn tròn chấm ngập sốt.',
      'Ăn cùng bạn bè là vui nhất vì vừa cuốn vừa trò chuyện rôm rả.'
    ],
    bestTime: ['Ăn xế', 'Tối'],
    tag: 'Giòn rụm cuốn hút',
    isPopular: false
  },
  {
    id: 'lau-thai',
    name: 'Lẩu Thái',
    category: 'hotpot',
    priceRange: '150.000đ - 280.000đ',
    minPrice: 15000,
    maxPrice: 280000,
    rating: 4.9,
    reviewCount: 390,
    image: imgLauThai,
    shortDesc: 'Nồi lẩu hải sản nghi ngút khói, nước lẩu Tom Yum chua cay kích thích mọi giác quan.',
    fullDesc: 'Lựa chọn số 1 cho các buổi tụ họp bạn bè, gia đình những tối mát trời. Nồi nước lẩu sôi sùng sục tỏa khói thơm lừng hương sả, riềng, lá chanh chúc kaffir và ớt hiểm. Nhúng ngập tràn tôm sú nhảy tanh tách, mực ống giòn sần sật, nghêu tươi ngọt nước, thịt bò hoa mềm mượt và đĩa rau muống, nấm kim châm mát lành cùng mì tôm chua cay.',
    mainIngredients: [
      'Nước dùng Tom Yum chua cay đậm đà vị thảo mộc',
      'Tôm sú tươi sống ngọt thịt',
      'Mực ống tươi cắt hoa giòn sần sật',
      'Nghêu (ngao) trắng béo mọng nước',
      'Thịt bò Mỹ nhúng tái mềm ngọt',
      'Rau muống, bắp chuối, nấm kim châm, nấm đùi gà',
      'Mì tôm chua cay hoặc bún tươi ăn kèm',
      'Chén muối tiêu chanh ớt hoặc muối ớt xanh'
    ],
    orderTips: [
      'Húp nước lẩu khi vừa nhúng hải sản ngọt lịm để cảm nhận độ tươi bùng nổ.',
      'Rất thích hợp đi nhóm từ 2 đến 6 người để cùng nhau thưởng thức.'
    ],
    bestTime: ['Trưa', 'Tối', 'Ăn khuya'],
    tag: 'Tụ họp bạn bè cực vui',
    isPopular: true
  },
  {
    id: 'tra-sua',
    name: 'Trà Sữa',
    category: 'dessert',
    priceRange: '25.000đ - 55.000đ',
    minPrice: 25000,
    maxPrice: 55000,
    rating: 4.9,
    reviewCount: 680,
    image: imgTraSua,
    shortDesc: 'Trà thơm đậm vị quyện sữa béo bùi, trân châu đen dẻo dai nhai vui miệng.',
    fullDesc: 'Thức uống quốc dân không thể thiếu sau mỗi bữa ăn chính hoặc những buổi trò chuyện cùng hội bạn. Vị trà ô long hoặc trà đen đậm đà hòa cùng sữa thơm béo ngậy vừa vặn, lớp trân châu đường đen dẻo dai dai nhai tí tách vui tai, thêm lớp kem cheese béo mặn sánh mịn phủ trên mặt ly mát lạnh.',
    mainIngredients: [
      'Trà đen hoặc trà Ô long ủ thơm đậm vị',
      'Sữa tươi thanh trùng hoặc bột sữa béo thơm',
      'Trân châu đen nấu đường nâu dẻo dai thơm nức',
      'Trân châu trắng giòn ngọt sần sật',
      'Lớp kem béo mặn Macchiato hoặc Cheese foam',
      'Thạch củ năng, pudding trứng mềm mượt',
      'Đá viên tinh khiết mát lạnh sảng khoái'
    ],
    orderTips: [
      'Mức đường đá chuẩn ngon nhất thường là 50% đường - 70% đá để không bị quá ngọt gắt.',
      'Nhớ cắm ống hút to chạm đáy ly rồi hút trọn một ngụm trà sữa quyện trân châu ấm dẻo.'
    ],
    bestTime: ['Sáng', 'Trưa', 'Ăn xế', 'Tối', 'Ăn khuya'],
    tag: 'Mát lạnh ngọt ngào',
    isPopular: true
  },
  {
    id: 'bun-cha',
    name: 'Bún chả',
    category: 'noodle',
    priceRange: '40.000đ - 65.000đ',
    minPrice: 40000,
    maxPrice: 65000,
    rating: 4.9,
    reviewCount: 480,
    image: imgBunCha,
    shortDesc: 'Chả miếng nướng than hoa vàng rượm, chả băm thơm mềm trong bát nước mắm chua ngọt ấm nóng.',
    fullDesc: 'Món ăn đặc sản nức tiếng Hà Thành từng làm say lòng các đầu bếp và thực khách quốc tế. Thịt ba chỉ thái mỏng ướp hành tỏi tiêu thơm lừng nướng xém cạnh trên than hoa đượm khói, chả băm viên nắn khéo léo béo ngậy. Thả ngập trong chén nước chấm pha chua ngọt ấm nóng kèm đu đủ, cà rốt giòn sần sật, gắp một đũa bún tươi và rau tía tô kinh giới chấm cùng, kèm nem rán giòn rụm.',
    mainIngredients: [
      'Bún tươi sợi nhỏ trắng ngần',
      'Thịt ba chỉ nướng than hoa xém cạnh',
      'Chả viên thịt băm tẩm ướp đậm đà',
      'Nước chấm tỏi ớt chua ngọt ấm nóng',
      'Đồ chua đu đủ và cà rốt giòn ngọt',
      'Nem rán (chả giò) nhân tôm thịt giòn rụm',
      'Rau thơm: Tía tô, kinh giới, xà lách, rau mùi'
    ],
    orderTips: [
      'Nên gọi thêm một chiếc nem rán nóng giòn để bữa ăn thêm trọn vẹn.',
      'Thêm chút ớt tươi băm và hạt tiêu xay vào chén nước chấm để vị thơm cay bùng nổ.'
    ],
    bestTime: ['Trưa', 'Tối'],
    tag: 'Đặc sản Hà Nội',
    isPopular: true
  },
  {
    id: 'banh-xeo',
    name: 'Bánh xèo',
    category: 'bread',
    priceRange: '35.000đ - 70.000đ',
    minPrice: 35000,
    maxPrice: 70000,
    rating: 4.8,
    reviewCount: 340,
    image: imgBanhXeo,
    shortDesc: 'Vỏ bánh xèo giòn rụm màu nghệ, nhân tôm thịt giá đỗ cuốn bánh tráng rau rừng tươi non.',
    fullDesc: 'Món bánh truyền thống giòn rụm vang tiếng xèo xèo vui tai mỗi khi đổ vào chảo gang. Vỏ bánh mỏng tang vàng ươm vị nghệ và nước cốt dừa béo bùi, bên trong ăm ắp tôm tươi ngọt thịt, thịt ba chỉ xào thơm và giá đỗ giòn ngọt. Cắt miếng bánh nóng hổi cuộn chặt trong lá cải xanh cay nồng, xà lách và rau thơm, chấm ngập chén nước mắm tỏi ớt chua ngọt keo sánh.',
    mainIngredients: [
      'Bột gạo pha nghệ và nước cốt dừa giòn tan',
      'Tôm sông hoặc tôm sú tươi ngọt',
      'Thịt ba chỉ thái mỏng xào thơm',
      'Giá đỗ tươi ngọt và hành hoa',
      'Rau rừng, cải xanh cay, xà lách, tía tô',
      'Bánh tráng dẻo để cuốn',
      'Nước mắm chua ngọt tỏi ớt cà rốt bào'
    ],
    orderTips: [
      'Ăn lúc vừa rời chảo để cảm nhận độ giòn tan rôm rốp của vỏ bánh.',
      'Đừng quên gói cùng một nhánh cải cay để cân bằng vị béo của bánh.'
    ],
    bestTime: ['Trưa', 'Ăn xế', 'Tối'],
    tag: 'Giòn rụm thơm lừng',
    isPopular: true
  },
  {
    id: 'banh-cuon',
    name: 'Bánh cuốn',
    category: 'bread',
    priceRange: '30.000đ - 50.000đ',
    minPrice: 30000,
    maxPrice: 50000,
    rating: 4.8,
    reviewCount: 310,
    image: imgBanhCuon,
    shortDesc: 'Bánh cuốn nóng tráng mỏng mướt, nhân thịt băm mộc nhĩ giòn sần sật, hành phi thơm nức mũi.',
    fullDesc: 'Bữa sáng thanh tao nhẹ bụng được ưa chuộng bậc nhất. Từng lớp bột gạo được tráng mỏng tang trên nồi hơi nghi ngút khói, cuộn lấy nhân thịt nạc dăm băm nhuyễn xào mộc nhĩ giòn sần sật. Dọn ra đĩa rắc đầy hành phi vàng ruộm tự làm giòn tan thơm nức, ăn kèm chả lụa, chả quế thơm lừng và chén nước mắm ấm nóng pha vừa miệng.',
    mainIngredients: [
      'Bột gạo tráng mỏng mềm mướt',
      'Thịt nạc heo băm xào mộc nhĩ tiêu đen',
      'Hành phi ta giòn rụm thơm nức mũi',
      'Chả lụa truyền thống hoặc chả quế nướng',
      'Giá đỗ trụng và rau thơm xắt nhỏ',
      'Nước chấm tỏi ớt ấm nóng chua ngọt thanh'
    ],
    orderTips: [
      'Thử gọi thêm một quả "Bánh cuốn trứng" lòng đào béo ngậy tan chảy.',
      'Xin thêm hành phi giòn nếu bạn mê mẩn hương thơm hành phi nhà làm.'
    ],
    bestTime: ['Sáng', 'Tối', 'Ăn khuya'],
    tag: 'Mềm mướt thanh tao',
    isPopular: false
  },
  {
    id: 'bo-ne',
    name: 'Bò né',
    category: 'hotpot',
    priceRange: '45.000đ - 75.000đ',
    minPrice: 45000,
    maxPrice: 75000,
    rating: 4.9,
    reviewCount: 420,
    image: imgBoNe,
    shortDesc: 'Chảo gang xèo xèo bốc khói: thịt bò mềm mọng, trứng ốp la lòng đào, pate béo ngậy chấm bánh mì.',
    fullDesc: 'Món ăn sáng và tối giàu năng lượng bậc nhất đường phố. Chiếc chảo gang hình con bò được nung nóng bỏng lửa, cho miếng thịt bò ướp đậm đà vào xèo xèo thơm phức, thêm viên pate gan béo bùi, trứng ốp la lòng đào chảy sền sệt, xúc xích và bơ thơm ngào ngạt. Xé miếng bánh mì nóng giòn quết trọn lòng đỏ trứng và sốt bò béo ngậy ăn cực kỳ đã miệng.',
    mainIngredients: [
      'Thịt bò thăn mềm ướp sốt tiêu tỏi',
      'Trứng gà ốp la lòng đào chảy sệt',
      'Pate gan heo thơm béo đậm đà',
      'Bơ thơm xào chảy bóng bẩy',
      'Xúc xích hoặc phô mai miếng béo',
      'Hành tây xắt khoanh và ngò rí',
      'Ổ bánh mì nóng giòn rụm & dưa leo muối'
    ],
    orderTips: [
      'Nên "né" người ra một chút khi chảo bò vừa bưng ra bàn vì dầu còn sôi xèo xèo bắn nhẹ.',
      'Dùng nĩa làm vỡ lòng đào trứng trộn đều vào sốt chảo gang để chấm bánh mì ngon tuyệt đỉnh.'
    ],
    bestTime: ['Sáng', 'Tối'],
    tag: 'Đậm đà nóng hổi',
    isPopular: true
  },
  {
    id: 'com-ga-xoi-mo',
    name: 'Cơm gà xối mỡ',
    category: 'rice',
    priceRange: '40.000đ - 65.000đ',
    minPrice: 40000,
    maxPrice: 65000,
    rating: 4.8,
    reviewCount: 360,
    image: imgComGaXoiMo,
    shortDesc: 'Đùi gà xối mỡ da giòn rôm rốp, cơm chiên đỏ óng hạt tơi chấm nước tương tỏi ớt.',
    fullDesc: 'Chiếc đùi gà góc tư to đẫm được xối mỡ nóng liên tục cho đến khi lớp da bên ngoài phồng rộp giòn tan rôm rốp, còn phần thịt bên trong vẫn giữ nguyên độ mọng nước mềm ngọt. Ăn cùng đĩa cơm chiên cà chua đỏ óng tơi xốp, dưa leo mát giòn, cà chua xắt lát và chén nước tương tỏi ớt cay nồng đậm vị.',
    mainIngredients: [
      'Đùi gà góc tư xối mỡ giòn rụm',
      'Cơm chiên hạt tơi màu đỏ sốt cà chua',
      'Dưa leo mát giòn và cà chua tươi',
      'Xà lách tươi ăn kèm giải ngấy',
      'Nước tương tỏi ớt dằm cay ngọt',
      'Chén canh súp xương hành hoa nóng hổi'
    ],
    orderTips: [
      'Nên ăn liền ngay tại quán lúc đùi gà vừa mới vớt ra để tận hưởng lớp da giòn đỉnh nhất.',
      'Chan nước tương tỏi ớt trực tiếp lên cơm chiên để tăng thêm độ đậm đà.'
    ],
    bestTime: ['Trưa', 'Tối'],
    tag: 'Giòn tan no lâu',
    isPopular: false
  },
  {
    id: 'mi-quang',
    name: 'Mì Quảng',
    category: 'noodle',
    priceRange: '35.000đ - 55.000đ',
    minPrice: 35000,
    maxPrice: 55000,
    rating: 4.8,
    reviewCount: 390,
    image: imgMiQuang,
    shortDesc: 'Sợi mì vàng óng nghệ, tôm thịt đậm vị, bánh tráng mè nướng giòn rụm và rau sống búp chuối.',
    fullDesc: 'Món ăn đại diện cho tâm hồn ẩm thực xứ Quảng mộc mạc mà chân thành. Sợi mì gạo dày dai ngả màu vàng nghệ óng ả, nước nhưn chỉ chan xâm xấp đáy tô nhưng cô đặc ngọt lịm từ tôm rim mặn ngọt, thịt ba chỉ rim keo, trứng cút nhỏ xinh. Rắc thêm đậu phộng rang giã dập thơm bùi, bẻ miếng bánh tráng mè giòn rụm ăn cùng đĩa rau sống búp chuối thái chỉ non mướt.',
    mainIngredients: [
      'Sợi mì Quảng vàng óng nghệ hoặc trắng dẻo',
      'Tôm đất rim mặn ngọt đậm đà',
      'Thịt heo ba chỉ rim vàng ươm',
      'Trứng cút luộc bùi béo',
      'Nước nhưn hầm xương tôm thịt đậm đà sánh nhẹ',
      'Đậu phộng rang thơm lừng giã dập',
      'Bánh tráng mè nướng giòn rụm',
      'Rau sống: Hoa chuối non, xà lách, rau cải con, húng lủi'
    ],
    orderTips: [
      'Bẻ nhỏ bánh tráng nướng rải đều lên trên tô rồi trộn đều rau và mì trước khi thưởng thức.',
      'Cắn một miếng ớt xanh cay the nồng đúng điệu miền Trung.'
    ],
    bestTime: ['Sáng', 'Trưa', 'Tối'],
    tag: 'Hương vị miền Trung',
    isPopular: true
  },
  {
    id: 'banh-trang-nuong',
    name: 'Bánh tráng nướng',
    category: 'snack',
    priceRange: '15.000đ - 30.000đ',
    minPrice: 15000,
    maxPrice: 30000,
    rating: 4.9,
    reviewCount: 520,
    image: imgBanhTrangNuong,
    shortDesc: 'Pizza Việt Nam nướng than giòn rụm, trứng cút, mỡ hành, tép khô thơm lừng góc phố.',
    fullDesc: 'Món ăn vặt đường phố nổi tiếng khởi nguồn từ xứ sương mù Đà Lạt. Miếng bánh tráng mỏng đặt trên bếp than hồng rực, quết đều mỡ hành thơm nức, đập trứng cút đánh tan lan tỏa khắp mặt bánh, rắc thêm tép khô đỏ au, thịt bằm, xúc xích và phô mai dẻo kéo sợi. Nướng cho đến khi viền bánh vàng giòn rụm, xịt sốt mayonnaise và tương ớt cay ngọt cuốn hút.',
    mainIngredients: [
      'Bánh tráng mỏng nướng than hoa',
      'Trứng cút hoặc trứng gà tươi đánh mịn',
      'Mỡ hành lá thơm ngào ngạt',
      'Tép khô (ruốc đỏ) mặn ngọt',
      'Thịt bằm hoặc xúc xích thái lát mỏng',
      'Phô mai béo ngậy kéo sợi mềm mịn',
      'Tương ớt cay và mayonnaise thơm béo'
    ],
    orderTips: [
      'Yêu cầu nướng thêm phô mai nếu bạn thích vị béo ngậy thơm nức.',
      'Ăn lúc vừa rời vỉ nướng nóng bỏng tay để vỏ bánh giữ độ giòn tan tối đa.'
    ],
    bestTime: ['Ăn xế', 'Tối', 'Ăn khuya'],
    tag: 'Pizza phố núi',
    isPopular: true
  },
  {
    id: 'bun-ca',
    name: 'Bún cá',
    category: 'noodle',
    priceRange: '35.000đ - 55.000đ',
    minPrice: 35000,
    maxPrice: 55000,
    rating: 4.7,
    reviewCount: 280,
    image: imgBunCa,
    shortDesc: 'Nước dùng chua thanh cà chua thì là, chả cá chiên dai ngọt và từng miếng cá rán giòn tan.',
    fullDesc: 'Món bún nước thanh tao với hương thơm đặc trưng của thì là tươi và cà chua chín mọng. Nước dùng hầm từ xương cá ngọt thanh tự nhiên, thoang thoảng vị chua dịu nhẹ của dấm bỗng hoặc me tươi. Miếng cá rô phi hoặc cá thu rán vàng ruộm bên ngoài, thịt bên trong ngọt mềm, ăn kèm chả cá hấp hoặc chiên dai giòn sần sật và đĩa rau cần nước tươi mát.',
    mainIngredients: [
      'Bún tươi sợi nhỏ thanh mát',
      'Cá tươi lọc xương rán vàng giòn ruộm',
      'Chả cá chiên hoặc hấp dai ngọt đậm vị',
      'Nước dùng xương cá hầm thanh ngọt tự nhiên',
      'Cà chua đỏ chín mọng và thì là tươi xắt khúc',
      'Dọc mùng (bạc hà) hoặc rau cần nước giòn ngọt',
      'Rau sống: Xà lách, tía tô, giá đỗ tươi'
    ],
    orderTips: [
      'Cho thêm một thìa dấm tỏi ớt để kích thích vị giác và làm nổi bật vị ngọt của nước dùng cá.',
      'Ăn kèm quẩy giòn nhúng vào nước dùng chua thanh rất ngon miệng.'
    ],
    bestTime: ['Sáng', 'Trưa', 'Tối'],
    tag: 'Thanh ngọt tươi mát',
    isPopular: false
  },
  {
    id: 'banh-mi-chao',
    name: 'Bánh mì chảo',
    category: 'bread',
    priceRange: '35.000đ - 60.000đ',
    minPrice: 35000,
    maxPrice: 60000,
    rating: 4.8,
    reviewCount: 370,
    image: imgBanhMiChao,
    shortDesc: 'Chảo xíu mại sốt cà nóng hổi, trứng ốp la, pate béo bùi ăn cùng ổ bánh mì giòn tan.',
    fullDesc: 'Biến tấu hấp dẫn của món bánh mì truyền thống trên chiếc chảo nhỏ nóng hổi. Nước sốt cà chua sền sệt đậm đà, viên xíu mại thịt mềm ngọt, hai quả trứng ốp la lòng đào vàng ươm, miếng pate gan nướng thơm nức mũi và lát xúc xích giòn ngon. Cầm ổ bánh mì nóng giòn xé từng góc nhúng ngập vào nước sốt sủi bọt xèo xèo ấm cúng vô cùng.',
    mainIngredients: [
      'Ổ bánh mì Việt Nam nóng hổi giòn rụm',
      'Trứng ốp la lòng đào béo ngậy',
      'Viên xíu mại thịt nạc dăm sốt cà chua đậm đà',
      'Pate gan heo béo bùi thơm lừng',
      'Xúc xích chiên hoặc dăm bông thái lát',
      'Sốt tiêu đen hoặc sốt cà chua ấm nóng sệt sánh',
      'Dưa leo mát lạnh và ngò rí tươi'
    ],
    orderTips: [
      'Xé bánh mì chấm trực tiếp vào lòng đỏ trứng ốp la lúc chảo còn sôi lăn tăn.',
      'Nên gọi thêm một ổ bánh mì phụ vì nước sốt rất đậm đà và đưa miệng.'
    ],
    bestTime: ['Sáng', 'Ăn xế', 'Tối'],
    tag: 'Nóng hổi thơm lừng',
    isPopular: false
  },
  {
    id: 'banh-flan',
    name: 'Bánh flan',
    category: 'dessert',
    priceRange: '15.000đ - 30.000đ',
    minPrice: 15000,
    maxPrice: 30000,
    rating: 4.9,
    reviewCount: 460,
    image: imgBanhFlan,
    shortDesc: 'Caramen mềm mịn béo ngậy tan trên đầu lưỡi, đẫm cà phê phin đậm đà và đá bào mát lạnh.',
    fullDesc: 'Món tráng miệng ngọt ngào quốc dân có mặt khắp các quán chè, quán ốc và vỉa hè Việt Nam. Chiếc bánh flan vàng ươm núng nính làm từ trứng gà tươi và sữa đặc béo ngậy, hấp chín tới đạt độ mềm mịn như lụa không một lỗ bọt khí. Tắm trong lớp nước sốt caramen hổ phách ngọt thanh, rưới thêm chút cà phê đen nguyên chất thơm đậm đà và đá bào nhuyễn mát rượi tan ngay trong miệng.',
    mainIngredients: [
      'Trứng gà tươi và sữa béo hấp mịn màng',
      'Nước đường thắng caramen màu hổ phách',
      'Cà phê phin đen đậm đà đắng nhẹ quyến rũ',
      'Đá bào nhuyễn mát lạnh sảng khoái',
      'Nước cốt dừa thơm béo (tùy chọn)'
    ],
    orderTips: [
      'Dầm nhẹ miếng bánh flan hòa cùng cà phê và đá bào để tận hưởng vị ngọt béo đắng mát lạnh xen kẽ.',
      'Rất thích hợp làm món tráng miệng sau những bữa ăn cay nồng như lẩu hoặc ốc.'
    ],
    bestTime: ['Trưa', 'Ăn xế', 'Tối', 'Ăn khuya'],
    tag: 'Mát lạnh ngọt ngào',
    isPopular: true
  },
  {
    id: 'com-nieu',
    name: 'Cơm niêu',
    category: 'rice',
    priceRange: '45.000đ - 85.000đ',
    minPrice: 45000,
    maxPrice: 85000,
    rating: 4.9,
    reviewCount: 410,
    image: imgComNieu,
    shortDesc: 'Cơm niêu đập giòn rụm lớp cháy đáy nồi, ăn cùng cá kho tộ đậm đà và canh cua rau đay.',
    fullDesc: 'Nét văn hóa ẩm thực truyền thống Việt Nam độc đáo. Cơm được nấu trong niêu đất nung cho hạt cơm dẻo thơm ngào ngạt, đáy nồi tạo lớp cháy vàng giòn rôm rốp. Ăn kèm niêu cá bống hoặc cá lóc kho tộ keo sệt óng ánh nước màu dừa, đĩa rau luộc chấm kho quẹt tóp mỡ đậm đà đưa cơm.',
    mainIngredients: [
      'Gạo tám thơm nấu trong niêu đất',
      'Lớp cháy cơm giòn vàng rộm',
      'Cá kho tộ tiêu đen nước dừa',
      'Kho quẹt tôm khô tóp mỡ',
      'Canh cua đồng mồng tơi',
      'Rau muống luộc chấm kho quẹt'
    ],
    orderTips: [
      'Nên gõ vỡ lớp cháy niêu trộn đều cùng nước sốt cá kho đậm đà để thưởng thức độ giòn rụm đỉnh nhất.'
    ],
    bestTime: ['Trưa', 'Tối'],
    tag: 'Đậm đà hương vị quê',
    isPopular: true
  },
  {
    id: 'com-bo-luc-lac',
    name: 'Cơm bò lúc lắc',
    category: 'rice',
    priceRange: '50.000đ - 80.000đ',
    minPrice: 50000,
    maxPrice: 80000,
    rating: 4.8,
    reviewCount: 380,
    image: imgComBoLucLac,
    shortDesc: 'Thịt bò thăn thái vuông quân cờ xào lửa lớn cùng ớt chuông, hành tây trên nền cơm chiên tỏi.',
    fullDesc: 'Món ăn giao thoa Á - Âu được lòng thực khách mọi lứa tuổi. Thịt bò phi lê mềm ngọt thái vuông quân cờ, xào trên chảo lửa cực lớn cuốn theo hơi khói nồng nàn (wok hei), áo đều lớp sốt nâu bóng bẩy ngọt mặn thơm nức bơ tỏi, hòa quyện cùng ớt chuông giòn ngọt và dĩa cơm chiên cà chua hoặc cơm bơ thơm lừng.',
    mainIngredients: [
      'Thịt bò thăn mềm thái quân cờ',
      'Ớt chuông xanh đỏ và hành tây giòn',
      'Bơ thơm béo ngậy xào tỏi phi',
      'Cơm chiên tỏi vàng hạt tơi',
      'Xà lách, dưa leo xắt lát',
      'Muối tiêu chanh tươi'
    ],
    orderTips: [
      'Dặn quán xào thịt bò vừa chín tới để miếng thịt mọng nước và ngọt mềm nhất.'
    ],
    bestTime: ['Trưa', 'Tối'],
    tag: 'Đậm vị thơm bơ',
    isPopular: false
  },
  {
    id: 'com-thit-kho-trung',
    name: 'Cơm thịt kho trứng',
    category: 'rice',
    priceRange: '35.000đ - 55.000đ',
    minPrice: 35000,
    maxPrice: 55000,
    rating: 4.8,
    reviewCount: 350,
    image: imgComThitKho,
    shortDesc: 'Thịt ba chỉ kho nước dừa xiêm mềm rục, trứng vịt béo bùi thấm đẫm sốt caramen óng ả.',
    fullDesc: 'Món cơm quen thuộc mang đậm tình cảm gia đình người Việt. Thịt ba rọi cắt miếng vuông to tẩm ướp đậm đà, kho liu riu cùng nước dừa tươi cho đến khi phần mỡ trong veo mềm tan, nạc mềm mọng nước, trứng vịt kho ngấm gia vị bùi béo. Ăn cùng dưa giá chua giòn giải ngấy và chén canh chua thanh mát.',
    mainIngredients: [
      'Thịt ba chỉ heo tươi thái miếng to',
      'Nước dừa xiêm tươi ngọt thanh',
      'Trứng vịt hoặc trứng gà luộc kho ngấm',
      'Cơm trắng dẻo thơm',
      'Dưa giá đỗ hẹ ngâm chua ngọt',
      'Canh rau ngót nấu thịt bằm'
    ],
    orderTips: [
      'Rưới nhiều nước thịt kho lên cơm nóng và dầm nát lòng đỏ trứng béo ngậy ăn cực kỳ bắt cơm.'
    ],
    bestTime: ['Trưa', 'Tối'],
    tag: 'Hương vị gia đình',
    isPopular: false
  },
  {
    id: 'bun-mam',
    name: 'Bún mắm',
    category: 'noodle',
    priceRange: '45.000đ - 70.000đ',
    minPrice: 45000,
    maxPrice: 70000,
    rating: 4.9,
    reviewCount: 430,
    image: imgBunMam,
    shortDesc: 'Hương thơm nức nở từ mắm cá linh cá sặc miền Tây, tôm tươi, mực giòn, heo quay và cà tím.',
    fullDesc: 'Đặc sản trứ danh vùng sông nước Tây Nam Bộ. Nước dùng nấu từ mắm cá linh, cá sặc đậm đà được lọc trong vắt, thơm nức hương sả băm ớt hiểm. Tô bún ăm ắp tôm sú tươi ngọt, mực ống giòn sần sật, thịt heo quay da giòn rụm, chả cá thác lác dẻo dai và miếng cà tím mềm ngọt. Ăn cùng rổ rau đắng, bông súng, rau muống chẻ mát lành.',
    mainIngredients: [
      'Bún tươi sợi nhỏ',
      'Nước lèo mắm cá linh cá sặc nấu sả ớt',
      'Tôm sú tươi ngọt lột vỏ',
      'Mực ống giòn sần sật',
      'Thịt heo quay da giòn rụm',
      'Cà tím mềm ngọt',
      'Chả cá thác lác vo viên',
      'Rau sống miền Tây: Bông súng, rau đắng, kèo nèo, rau muống'
    ],
    orderTips: [
      'Chấm tôm mực và heo quay vào chén nước mắm me chua ngọt cay the để bùng nổ hương vị.'
    ],
    bestTime: ['Trưa', 'Tối'],
    tag: 'Đậm đà miền Tây',
    isPopular: true
  },
  {
    id: 'mien-ga',
    name: 'Miến gà',
    category: 'noodle',
    priceRange: '35.000đ - 55.000đ',
    minPrice: 35000,
    maxPrice: 55000,
    rating: 4.8,
    reviewCount: 290,
    image: imgMienGa,
    shortDesc: 'Sợi miến dong dai trong veo, thịt gà ta xé phay giòn da trong nước dùng ninh xương ngọt thanh.',
    fullDesc: 'Món ăn thanh tao ấm bụng rất được lòng người sành ăn. Sợi miến dong nguyên chất dai mềm không bị nát, ngập trong nước dùng gà trong veo ngọt thanh tự nhiên từ xương gà hầm. Từng thớ thịt gà ta dai ngọt, lớp da vàng giòn rắc thêm chút lá chanh thái sợi the mát, nấm hương thơm lừng và hành hoa mướt xanh.',
    mainIngredients: [
      'Sợi miến dong dai trong veo',
      'Thịt gà ta luộc xé phay da giòn',
      'Nước dùng gà hầm thanh ngọt tự nhiên',
      'Nấm hương và mộc nhĩ thơm nức',
      'Lá chanh thái chỉ siêu mỏng',
      'Hành hoa, ngò gai tươi',
      'Muối tiêu chanh ớt chấm thịt'
    ],
    orderTips: [
      'Nên gọi thêm một bộ lòng mề gà xào hoặc chén tiết luộc mềm mượt ăn kèm.'
    ],
    bestTime: ['Sáng', 'Tối', 'Ăn khuya'],
    tag: 'Thanh tao ấm bụng',
    isPopular: false
  },
  {
    id: 'mien-tron',
    name: 'Miến trộn',
    category: 'noodle',
    priceRange: '35.000đ - 60.000đ',
    minPrice: 35000,
    maxPrice: 60000,
    rating: 4.7,
    reviewCount: 260,
    image: imgMienTron,
    shortDesc: 'Miến dong trụng vừa tới trộn sốt tương đen đậm đà, thịt bò, tôm, đậu phộng rang và rau cần nước.',
    fullDesc: 'Món miến khô thanh mát đổi vị hấp dẫn. Miến dong được trụng chín tới giữ độ dai giòn sần sật, rưới nước sốt trộn chua ngọt đậm đà pha từ xì dầu, dầu hào và giấm tỏi. Tô miến đầy đặn với thịt bò xào mềm ngọt hoặc lươn giòn, tôm sú tươi, rau cần nước giòn ngọt, giá đỗ, hành phi thơm nức và đậu phộng rang giòn bùi.',
    mainIngredients: [
      'Sợi miến dong dai giòn sần sật',
      'Thịt bò xào mềm ngọt hoặc lươn chiên giòn',
      'Tôm sú tươi bóc nõn',
      'Rau cần nước và giá đỗ tươi giòn',
      'Đậu phộng rang thơm giã dập',
      'Hành phi vàng ruộm tự làm',
      'Nước sốt trộn tương đen chua ngọt bí truyền'
    ],
    orderTips: [
      'Trộn đều từ đáy tô lên để sợi miến thấm đều nước sốt và đậu phộng trước khi ăn.'
    ],
    bestTime: ['Trưa', 'Tối'],
    tag: 'Chua ngọt giòn dai',
    isPopular: false
  },
  {
    id: 'banh-khot',
    name: 'Bánh khọt',
    category: 'bread',
    priceRange: '35.000đ - 60.000đ',
    minPrice: 35000,
    maxPrice: 60000,
    rating: 4.8,
    reviewCount: 390,
    image: imgBanhKhot,
    shortDesc: 'Chiếc bánh khọt vàng ươm giòn rụm trong khuôn gang, tôm tươi đỏ au và mỡ hành béo bùi.',
    fullDesc: 'Món đặc sản ven biển Vũng Tàu nức tiếng làm say lòng thực khách. Từng chiếc bánh tròn nhỏ được đổ trong khuôn đất nung hoặc chảo gang ngập dầu sôi xèo xèo, vỏ bánh giòn tan rôm rốp, bên trong mềm béo vị nước cốt dừa. Phía trên đặt con tôm đỏ au ngọt thịt, rắc bột tôm mặn mà và mỡ hành lá thơm ngậy. Cuốn cùng xà lách, rau thơm, đu đủ ngâm chua và chấm ngập nước mắm tỏi ớt.',
    mainIngredients: [
      'Bột gạo pha cốt dừa đổ khuôn giòn tan',
      'Tôm tươi nguyên con ngọt thịt',
      'Bột tôm chấy đỏ au thơm lừng',
      'Mỡ hành lá tươi óng ả',
      'Đồ chua đu đủ cà rốt thái sợi',
      'Rau sống: Xà lách, cải xanh, rau diếp cá, tía tô',
      'Nước mắm chua ngọt pha nhạt vừa miệng'
    ],
    orderTips: [
      'Cuộn tròn bánh trong lá xà lách kèm vài nhánh rau thơm rồi chấm ngập vào chén nước mắm kèm đu đủ bào.'
    ],
    bestTime: ['Trưa', 'Ăn xế', 'Tối'],
    tag: 'Giòn tan bờ biển',
    isPopular: true
  },
  {
    id: 'banh-can',
    name: 'Bánh căn',
    category: 'bread',
    priceRange: '30.000đ - 55.000đ',
    minPrice: 30000,
    maxPrice: 55000,
    rating: 4.8,
    reviewCount: 360,
    image: imgBanhCan,
    shortDesc: 'Cặp bánh căn nướng khuôn đất nung giòn xốp, trứng cút lòng đào chấm chén xíu mại mỡ hành cay ấm.',
    fullDesc: 'Món ăn ấm lòng bắt nguồn từ Ninh Thuận và phố núi Đà Lạt. Bột gạo nướng trên khuôn đất nung không dùng dầu mỡ nên vỏ bánh giòn xốp bên dưới, xốp mềm bên trên. Nhân trứng cút béo ngậy hoặc tôm thịt tươi rói, úp hai chiếc bánh lại thành một cặp. Thả ngập vào chén nước mắm mỡ hành nóng hổi có viên xíu mại mềm tan và xoài xanh băm nhuyễn.',
    mainIngredients: [
      'Bột gạo nướng khuôn đất nung không dầu',
      'Trứng cút hoặc trứng gà lòng đào',
      'Viên xíu mại thịt nạc béo mềm',
      'Chén nước mắm mỡ hành lá nóng hổi',
      'Xoài keo xanh băm sợi chua ngọt',
      'Sa tế ớt tươi cay nồng xé lưỡi'
    ],
    orderTips: [
      'Nên gắp trọn cả cặp bánh thả ngập vào chén xíu mại mỡ hành cho bánh hút đẫm nước sốt rồi ăn cả miếng.'
    ],
    bestTime: ['Sáng', 'Tối', 'Ăn khuya'],
    tag: 'Nóng hổi phố núi',
    isPopular: false
  },
  {
    id: 'bo-luc-lac',
    name: 'Bò lúc lắc',
    category: 'hotpot',
    priceRange: '60.000đ - 95.000đ',
    minPrice: 60000,
    maxPrice: 95000,
    rating: 4.8,
    reviewCount: 370,
    image: imgBoLucLac,
    shortDesc: 'Đĩa bò phi lê mềm mọng xào sốt tiêu tỏi bóng bẩy, khoai tây chiên vàng giòn và muối tiêu chanh.',
    fullDesc: 'Món ăn khoái khẩu trong các bữa tiệc và bữa tối sum vầy. Thịt bò thăn ngoại hoặc phi lê mềm mọng thái quân cờ vuông vức, xào đảo liên tục trên lửa lớn cho cháy cạnh ngoài, mềm mọng nước bên trong. Áo đều nước sốt dầu hào, bơ thơm và tiêu đen thơm lừng, dọn kèm đĩa khoai tây chiên giòn tan, dưa leo cà chua xắt lát và chén muối tiêu chanh tươi.',
    mainIngredients: [
      'Thịt bò thăn mềm thái khối vuông',
      'Ớt chuông đỏ xanh và hành tây xắt miếng',
      'Sốt bơ tỏi tiêu đen đậm đà',
      'Khoai tây chiên giòn rụm',
      'Xà lách, cà chua tươi',
      'Muối tiêu chanh ớt tươi'
    ],
    orderTips: [
      'Ăn kèm khoai tây chiên chấm vào phần sốt bò béo ngậy đọng lại trên đĩa cực kỳ ngon.'
    ],
    bestTime: ['Trưa', 'Tối'],
    tag: 'Mềm mọng đậm đà',
    isPopular: false
  },
  {
    id: 'lau-bo',
    name: 'Lẩu bò',
    category: 'hotpot',
    priceRange: '150.000đ - 260.000đ',
    minPrice: 150000,
    maxPrice: 260000,
    rating: 4.9,
    reviewCount: 520,
    image: imgLauBo,
    shortDesc: 'Nồi lẩu đuôi bò hầm thảo mộc nghi ngút khói, bắp bò hoa giòn, tàu hũ ky và chao ớt cay béo.',
    fullDesc: 'Lựa chọn số 1 cho những buổi tối se lạnh quây quần bên người thân bạn bè. Nước lẩu hầm từ xương ống và đuôi bò ninh nhừ dậy mùi quế, hồi, đinh hương và sả đập dập thơm lừng. Nhúng từng lát bắp bò vân hoa giòn ngọt, gân bò dẻo quánh, khoai môn bùi bùi và váng đậu giòn rụm. Chấm cùng chén chao môn béo ngậy đánh tan cùng sa tế cay nồng.',
    mainIngredients: [
      'Nước dùng xương bò hầm thảo mộc thơm nức',
      'Bắp bò hoa thái mỏng nhúng tái mềm',
      'Đuôi bò hầm mềm rục béo ngậy',
      'Gân bò dẻo trong veo',
      'Khoai môn dẻo bùi & đậu hũ non',
      'Tàu hũ ky (váng đậu) chiên phồng',
      'Mì trứng tươi hoặc bún tươi ăn kèm',
      'Nước chấm chao sa tế béo mặn'
    ],
    orderTips: [
      'Cho khoai môn vào từ đầu để khoai ninh mềm bở hòa vào nước dùng ngọt sánh béo ngậy.'
    ],
    bestTime: ['Tối', 'Ăn khuya'],
    tag: 'Tụ họp bạn bè',
    isPopular: true
  },
  {
    id: 'lau-ga-la-e',
    name: 'Lẩu gà lá é',
    category: 'hotpot',
    priceRange: '150.000đ - 250.000đ',
    minPrice: 150000,
    maxPrice: 250000,
    rating: 4.9,
    reviewCount: 480,
    image: imgLauGaLaE,
    shortDesc: 'Nước lẩu thanh ngọt the nồng hương lá é tươi, thịt gà ta dai chắc thịt và nấm bào ngư giòn ngọt.',
    fullDesc: 'Đặc sản trứ danh xứ sở hoa vàng cỏ xanh Phú Yên và phố lạnh Đà Lạt. Gà ta thả vườn thịt chắc, ngọt thơm được chặt miếng vừa ăn ninh cùng măng chua và nấm bào ngư. Nước lẩu ngọt thanh vị xương gà, khi ăn nhúng cả rổ lá é tươi non vào nồi nước sôi sùng sục. Vị lá é cay the thơm nồng ấm lan tỏa khắp khoang miệng, chấm muối ớt hột giã nhuyễn.',
    mainIngredients: [
      'Gà ta thả vườn thịt chắc ngọt thơm',
      'Nước dùng ninh xương gà thanh ngọt',
      'Rổ lá é tươi non the cay ngào ngạt',
      'Nấm bào ngư hoặc nấm đùi gà giòn ngọt',
      'Măng le hoặc măng chua giòn sần sật',
      'Bún tươi sợi nhỏ',
      'Muối hột giã ớt xiêm xanh cay nồng'
    ],
    orderTips: [
      'Chỉ nhúng lá é vừa chín tới để giữ trọn vị cay the the thơm nồng đặc trưng, không nên để lá é bị nhũn.'
    ],
    bestTime: ['Trưa', 'Tối', 'Ăn khuya'],
    tag: 'Đặc sản Đà Lạt',
    isPopular: true
  },
  {
    id: 'lau-kim-chi',
    name: 'Lẩu kim chi',
    category: 'hotpot',
    priceRange: '140.000đ - 240.000đ',
    minPrice: 140000,
    maxPrice: 240000,
    rating: 4.8,
    reviewCount: 390,
    image: imgLauKimChi,
    shortDesc: 'Nồi lẩu kim chi đỏ rực sôi sục chua cay bốc khói, ba chỉ bò Mỹ, đậu hũ non và nấm kim châm.',
    fullDesc: 'Món lẩu chua cay đậm đà cực kỳ kích thích vị giác ngày mưa mát trời. Nước lẩu nấu từ kim chi cải thảo lên men chuẩn vị, nước hầm xương đậm đà và tương ớt Gochujang cay nồng. Nhúng ngập tràn từng cuộn thịt ba chỉ bò Mỹ mềm ngọt, tôm sú tươi, mực giòn, đậu hũ non mềm mịn tan trên đầu lưỡi, nấm kim châm và đĩa mì tôm ramen dai ngon.',
    mainIngredients: [
      'Kim chi cải thảo lên men chua cay đậm vị',
      'Thịt ba chỉ bò Mỹ cuộn tròn mềm mọng',
      'Tôm sú tươi và mực giòn sần sật',
      'Đậu hũ non mềm mịn như lụa',
      'Nấm kim châm, nấm hoàng đế, cải thìa',
      'Mì ramen Hàn Quốc sợi dai',
      'Hành baro thái vát'
    ],
    orderTips: [
      'Nước lẩu càng đun về sau càng ngấm vị chua cay của kim chi và vị ngọt của thịt bò rất đậm đà.'
    ],
    bestTime: ['Trưa', 'Tối', 'Ăn khuya'],
    tag: 'Chua cay xuýt xoa',
    isPopular: false
  },
  {
    id: 'ga-nuong',
    name: 'Gà nướng muối ớt',
    category: 'fastfood',
    priceRange: '130.000đ - 220.000đ',
    minPrice: 130000,
    maxPrice: 220000,
    rating: 4.9,
    reviewCount: 490,
    image: imgGaNuong,
    shortDesc: 'Gà ta nướng than hoa vàng rượm, lớp da phồng giòn cay nồng muối ớt, chấm muối tiêu chanh ớt xanh.',
    fullDesc: 'Món ăn khoái khẩu của những buổi tiệc nướng tụ họp. Con gà ta thả vườn được tẩm ướp hỗn hợp muối hột, ớt hiểm giã nhuyễn, sả băm và mật ong bóng bẩy. Nướng quay đều trên lò than củi cho đến khi mỡ gà nhỏ giọt xèo xèo, lớp da vàng ruộm phồng giòn cay cay mặn mặn, thịt bên trong mềm mọng thơm lừng. Chấm ngập chén muối ớt xanh sữa đặc cay xé.',
    mainIngredients: [
      'Gà ta thả vườn nguyên con nướng than',
      'Sốt muối ớt hiểm sả băm ướp đậm',
      'Mật ong quét lớp ngoài vàng óng ả',
      'Dưa leo mát giòn, rau răm cay nồng',
      'Muối ớt xanh lá chanh pha sữa béo mặn cay',
      'Bánh mì nóng hoặc xôi chiên ăn kèm'
    ],
    orderTips: [
      'Nên ăn bằng tay xé từng miếng gà nóng hổi chấm muối ớt xanh để cảm nhận trọn vẹn vị ngon dân dã.'
    ],
    bestTime: ['Trưa', 'Tối', 'Ăn khuya'],
    tag: 'Cay nồng da giòn',
    isPopular: true
  },
  {
    id: 'suon-nuong',
    name: 'Sườn nướng',
    category: 'fastfood',
    priceRange: '45.000đ - 90.000đ',
    minPrice: 45000,
    maxPrice: 90000,
    rating: 4.8,
    reviewCount: 340,
    image: imgSuonNuong,
    shortDesc: 'Dải sườn non nướng than củi cháy xém cạnh, sốt mật ong ngũ vị thơm lừng mọng nước.',
    fullDesc: 'Từng dẻ sườn non heo tươi ngon được ướp kỳ công với ngũ vị hương, sả tỏi băm nhuyễn, dầu hào và mật ong rừng. Nướng trên than củi hồng rực cho đến khi phần mỡ viền cháy cạnh caramen thơm nức mũi, thịt mềm róc xương không bị khô. Cắn một miếng cảm nhận rõ vị ngọt tự nhiên của thịt quyện cùng sốt ướp đậm đà khó cưỡng.',
    mainIngredients: [
      'Sườn non heo chọn lọc nhiều thịt',
      'Sốt ướp mật ong sả tỏi ngũ vị hương',
      'Mè rang thơm rắc mặt sườn',
      'Dưa leo và cà chua tươi giải ngấy',
      'Muối ớt chanh hoặc nước tương tỏi ớt',
      'Đồ chua giòn ngọt'
    ],
    orderTips: [
      'Ăn kèm đĩa cơm tấm hoặc ổ bánh mì nóng giòn chấm phần sốt sườn chảy ra rất đưa miệng.'
    ],
    bestTime: ['Trưa', 'Tối'],
    tag: 'Đậm đà thơm nức',
    isPopular: false
  },
  {
    id: 'kimbap',
    name: 'Kimbap',
    category: 'fastfood',
    priceRange: '30.000đ - 45.000đ',
    minPrice: 30000,
    maxPrice: 45000,
    rating: 4.7,
    reviewCount: 310,
    image: imgKimbap,
    shortDesc: 'Cơm cuộn rong biển thơm dầu mè, nhân thanh cua, xúc xích, trứng chiên, cà rốt và củ cải vàng giòn ngọt.',
    fullDesc: 'Món ăn tiện lợi, thanh nhẹ và đầy đủ dưỡng chất được các bạn trẻ vô cùng yêu thích. Từng hạt cơm dẻo trộn giấm dầu mè thơm lừng cuộn chặt trong lá rong biển giòn dai. Phần nhân rực rỡ sắc màu với củ cải muối vàng giòn sần sật, cà rốt bào sợi xào thơm, thanh cua, xúc xích, dưa leo tươi mát và dải trứng rán vàng ươm, chấm sốt mayonnaise tương ớt béo cay.',
    mainIngredients: [
      'Lá rong biển khô nướng thơm giòn',
      'Cơm dẻo trộn dầu mè và hạt mè rang',
      'Củ cải muối vàng giòn đặc trưng',
      'Thanh cua và xúc xích giòn ngon',
      'Trứng gà tráng mỏng thái sợi dài',
      'Cà rốt xào mềm và dưa chuột tươi mát',
      'Sốt chấm mayonnaise tương ớt chua béo'
    ],
    orderTips: [
      'Thử món Kimbap chiên xù nếu bạn thích lớp vỏ ngoài giòn rụm nóng hổi chấm sốt phô mai.'
    ],
    bestTime: ['Sáng', 'Trưa', 'Ăn xế', 'Tối'],
    tag: 'Nhanh gọn đủ chất',
    isPopular: false
  },
  {
    id: 'tokbokki',
    name: 'Tokbokki',
    category: 'snack',
    priceRange: '30.000đ - 55.000đ',
    minPrice: 30000,
    maxPrice: 55000,
    rating: 4.8,
    reviewCount: 420,
    image: imgTokbokki,
    shortDesc: 'Bánh gạo dẻo quánh sốt tương ớt Hàn Quốc đỏ rực ngọt cay, chả cá lát và phô mai kéo sợi thơm béo.',
    fullDesc: 'Món ăn vặt đường phố nổi tiếng xứ sở kim chi làm xiêu lòng bao tín đồ ẩm thực. Những thỏi bánh gạo trắng dẻo dai được ninh trong nước sốt tương ớt Gochujang đỏ au cay ngọt ấm nồng, hòa cùng những miếng chả cá dai ngọt và trứng gà luộc lòng đào. Phủ thêm lớp phô mai Mozzarella nóng chảy kéo sợi béo ngậy tạo nên hương vị bùng nổ.',
    mainIngredients: [
      'Thỏi bánh gạo dẻo dai truyền thống',
      'Sốt ớt Gochujang cay ngọt đậm đà',
      'Chả cá Hàn Quốc thái lát tam giác',
      'Trứng gà luộc bổ đôi',
      'Phô mai Mozzarella dẻo béo ngậy kéo sợi',
      'Hành boa-rô và mè trắng rang thơm'
    ],
    orderTips: [
      'Nhớ gọi thêm phô mai kéo sợi để sốt bớt cay nồng và tăng độ béo ngậy thơm ngon tuyệt hảo.'
    ],
    bestTime: ['Ăn xế', 'Tối', 'Ăn khuya'],
    tag: 'Cay ngọt béo ngậy',
    isPopular: true
  },
  {
    id: 'mi-cay',
    name: 'Mì cay',
    category: 'noodle',
    priceRange: '40.000đ - 65.000đ',
    minPrice: 40000,
    maxPrice: 65000,
    rating: 4.8,
    reviewCount: 460,
    image: imgMiCay,
    shortDesc: 'Thố mì cay Hàn Quốc 7 cấp độ sôi sùng sục, tôm sú, mực tươi, thịt bò, nấm kim châm và bắp cải tím.',
    fullDesc: 'Món ăn thử thách vị giác đỉnh cao cho những ai yêu thích đồ cay. Thố đất nung giữ nhiệt sôi sùng sục tỏa khói cay xè thơm nức. Sợi mì ramen Hàn Quốc to tròn dai ngon trong nước súp kim chi đỏ rực vị ớt bột cay xé lưỡi. Đầy ắp topping tôm sú tươi ngọt, mực giòn sần sật, thịt bò mềm ngọt, xúc xích, nấm kim châm và bắp cải tím thanh mát.',
    mainIngredients: [
      'Sợi mì ramen Hàn Quốc to dai ngon',
      'Nước dùng kim chi ớt cấp độ cay nồng',
      'Tôm sú tươi ngọt nguyên con',
      'Mực ống giòn sần sật',
      'Thịt bò phi lê thái mỏng',
      'Xúc xích chiên và cá viên',
      'Nấm kim châm, bông cải xanh, bắp cải tím'
    ],
    orderTips: [
      'Nếu mới thử lần đầu, hãy bắt đầu từ cấp độ 0.5 đến cấp 1 để cảm nhận trọn vẹn vị ngọt ngon của nước súp.'
    ],
    bestTime: ['Trưa', 'Tối', 'Ăn khuya'],
    tag: 'Thử thách vị giác',
    isPopular: true
  },
  {
    id: 'che-khuc-bach',
    name: 'Chè khúc bạch',
    category: 'dessert',
    priceRange: '25.000đ - 45.000đ',
    minPrice: 25000,
    maxPrice: 45000,
    rating: 4.9,
    reviewCount: 480,
    image: imgCheKhucBach,
    shortDesc: 'Viên khúc bạch phô mai mềm béo núng nính, quả nhãn ngọt thanh, hạnh nhân lát thơm giòn rụm.',
    fullDesc: 'Món tráng miệng thanh mát tao nhã được săn đón nồng nhiệt mỗi dịp hè về. Từng viên khúc bạch cắt gợn sóng màu trắng phô mai béo ngậy và màu xanh matcha thoang thoảng thơm mát. Tắm trong nước đường phèn ướp hoa nhài thanh ngọt dịu nhẹ, ăn cùng những quả nhãn lồng mọng nước giòn ngọt và lát hạnh nhân sấy vàng ruộm thơm giòn tí tách.',
    mainIngredients: [
      'Khúc bạch phô mai sữa tươi mềm béo núng nính',
      'Khúc bạch trà xanh matcha thanh mát',
      'Nhãn lồng hoặc vải thiều mọng nước ngọt thanh',
      'Nước đường phèn thơm hương hoa nhài dịu',
      'Hạnh nhân lát nướng vàng giòn thơm bùi',
      'Hạt é thanh mát và đá lạnh mát rượi'
    ],
    orderTips: [
      'Rắc hạnh nhân lên trên cùng ngay trước khi ăn để lát hạnh nhân giữ được độ giòn rụm thơm nức.'
    ],
    bestTime: ['Trưa', 'Ăn xế', 'Tối', 'Ăn khuya'],
    tag: 'Thanh mát giải nhiệt',
    isPopular: true
  },
  {
    id: 'che-buoi',
    name: 'Chè bưởi',
    category: 'dessert',
    priceRange: '20.000đ - 35.000đ',
    minPrice: 20000,
    maxPrice: 35000,
    rating: 4.8,
    reviewCount: 410,
    image: imgCheBuoi,
    shortDesc: 'Cùi bưởi giòn sần sật không đắng, đậu xanh đồ bùi bùi, nước cốt dừa sánh mịn béo ngậy thơm vani.',
    fullDesc: 'Món chè dân dã truyền thống đòi hỏi sự khéo léo và tỉ mỉ của người nấu. Cùi bưởi được khử đắng công phu, tẩm bột năng luộc trong veo giòn sần sật nhai cực kỳ vui tai. Đậu xanh bở tơi bùi bùi quyện trong nước đường thốt nốt sánh mịn thơm thoang thoảng mùi hoa bưởi, chan thêm muỗng nước cốt dừa béo ngậy và đậu phộng rang giòn thơm lừng.',
    mainIngredients: [
      'Cùi bưởi sên giòn sần sật không chút vị đắng',
      'Đậu xanh đãi vỏ hấp bở tơi bùi béo',
      'Bột năng khuấy sánh mịn trong veo',
      'Nước đường thốt nốt thơm hương hoa bưởi',
      'Nước cốt dừa đậm đặc béo ngậy',
      'Đậu phộng rang thơm giòn rụm',
      'Đá bào mát lạnh giải nhiệt'
    ],
    orderTips: [
      'Khuấy nhẹ để lớp cốt dừa béo hòa tan cùng chè ngọt thanh, thưởng thức cùi bưởi giòn lách tách.'
    ],
    bestTime: ['Trưa', 'Ăn xế', 'Tối'],
    tag: 'Ngọt bùi giòn sần sật',
    isPopular: false
  },
  {
    id: 'trai-cay-to',
    name: 'Trái cây tô',
    category: 'dessert',
    priceRange: '30.000đ - 55.000đ',
    minPrice: 30000,
    maxPrice: 55000,
    rating: 4.9,
    reviewCount: 450,
    image: imgTraiCayTo,
    shortDesc: 'Tô hoa quả nhiệt đới tươi rói cắt miếng vuông: bơ, dâu, xoài, dưa hấu, mít dầm sữa chua mát lạnh.',
    fullDesc: 'Lựa chọn lành mạnh và sảng khoái số 1 sau mỗi bữa ăn. Một tô lớn ngập tràn các loại hoa quả tươi ngon theo mùa được gọt cắt vuông vức: bơ sáp béo ngậy, xoài chín ngọt lịm, dưa hấu mọng nước, thanh long đỏ au, dâu tây chua dịu và mít thơm lừng. Rưới thêm hũ sữa chua sánh mịn, chút sữa đặc ngọt béo và đá bào nhuyễn mát lạnh sảng khoái.',
    mainIngredients: [
      'Bơ sáp béo ngậy thái hạt lựu to',
      'Xoài chín ngọt lịm & dưa hấu mát rượi',
      'Dâu tây tươi Đà Lạt chua ngọt',
      'Mít thái xé sợi thơm nức mũi',
      'Thanh long đỏ và kiwi tươi',
      'Sữa chua không đường hoặc có đường thơm mát',
      'Sữa đặc Ông Thọ và đá tuyết mát lạnh'
    ],
    orderTips: [
      'Dầm đều hoa quả cùng sữa chua và đá bào để từng miếng trái cây mát lạnh ngậm đủ vị chua béo ngọt ngào.'
    ],
    bestTime: ['Sáng', 'Trưa', 'Ăn xế', 'Tối', 'Ăn khuya'],
    tag: 'Tươi ngon bổ dưỡng',
    isPopular: true
  }
];

export const DEFAULT_WHEEL_ITEMS: string[] = [
  'Cơm tấm',
  'Phở bò',
  'Bún bò Huế',
  'Bún thịt nướng',
  'Bánh mì thịt',
  'Bún đậu mắm tôm',
  'Gà rán',
  'Lẩu Thái'
];

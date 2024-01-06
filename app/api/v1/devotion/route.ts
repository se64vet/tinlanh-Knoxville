import { ItemsEntity, devotionalVideo, youtubeResponse } from '@/utils/global-types'
import {NextResponse} from 'next/server'
import { cache } from 'react'



// get all videos from youtube playlist
export const GET = async (req:Request) => {
    const url: string = process.env.YT_API_URL || "";
    const getDevotionalVideos = cache(async (url : string) => {
        const response = await fetch(url, {cache: "no-store"})
        const data = await response.json();
        return data;
    })
    try {
        // get raw response from youtube v3 API
        const data:youtubeResponse = await getDevotionalVideos(url);

        // fitering unavailable videos
        const filteredData:ItemsEntity[] = data.items === undefined ? [] : data.items!.filter((item:any) => (item.snippet.thumbnails.default !== undefined))

        // extract fields from response for cleaner data return
        const items:devotionalVideo[] = filteredData.map((item:any) => (
            {      
            title: item.snippet.title,
            id: item.snippet.resourceId.videoId,
            description: item.snippet.description,
            thumbnails: {
                default: {
                    url: item.snippet.thumbnails.default.url,
                    width: item.snippet.thumbnails.default.width,
                    height: item.snippet.thumbnails.default.height
                },
                standard: {
                    url: item.snippet.thumbnails.standard.url,
                    width: item.snippet.thumbnails.standard.width,
                    height: item.snippet.thumbnails.standard.height
                }
            }
        })
        );

        return NextResponse.json(items)
    }
    catch(e) {
        return new NextResponse('[GET:api/v1/devotion] : Internal Error', {status: 500})
    }
}

const staticResult = [
    {
        "title": "Kiên Nhẫn Trong Cơn Thử Thách | Oneway Radio - Tĩnh Nguyện Hằng Ngày 01/11/2023",
        "id": "AXfWqZycu7o",
        "description": "Có bao giờ bạn tự hỏi tại sao chúng ta tin Chúa mà lại phải trải qua muôn vàn khó khăn, thử thách? Tại sao Chúa lại để chúng ta đối diện với những điều ấy? Thực ra Kinh Thánh cho chúng ta biết rằng đôi khi Chúa cho phép những hoạn nạn, thử thách trong hôn nhân, công việc, những tan vỡ trong mối liên hệ hoặc sức khỏe để tôi luyện đức tin của bạn. Lời Chúa hôm nay khích lệ và an ủi bạn cậy nhờ sức Chúa để vượt qua thử thách. \n\nHôm nay, ngày 01/11/2023, chương trình Tĩnh Nguyện Hằng Ngày thân mời quý thính giả cùng suy gẫm Lời Chúa với tác giả Dayna Lovelady qua chủ đề KIÊN NHẪN TRONG CƠN THỬ THÁCH.\n\n“Thưa anh em của tôi, hãy xem sự thử thách trăm chiều xảy đến cho anh em như là điều vui mừng trọn vẹn, vì biết rằng sự thử thách đức tin anh em sinh ra kiên nhẫn.” (Gia-cơ 1:2-3) \n\n---\nMọi thắc mắc, góp ý hoặc dự phần dâng hiến cùng chương trình, xin hãy liên hệ với chúng tôi qua:\n\nEmail: chiase@oneway.vn\nInbox: m.me/www.oneway.vn\nHotline: 0896 164 199\n\nChúc quý vị một ngày tốt lành. Thân chào và hẹn gặp lại quý vị vào chương trình ngày mai.",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/AXfWqZycu7o/default.jpg",
                "width": 120,
                "height": 90
            },
            "standard": {
                "url": "https://i.ytimg.com/vi/AXfWqZycu7o/sddefault.jpg",
                "width": 640,
                "height": 480
            }
        }
    },
    {
        "title": "Công Cụ Trong Tay Chúa | Oneway Radio - Tĩnh Nguyện Hằng Ngày 02/11/2023",
        "id": "q6Ugnx62SQU",
        "description": "Có bao giờ bạn ước được giống như các sứ đồ kề cận Chúa Jêsus trong thời gian Ngài thực thi chức vụ trên đất không? Cảm ơn Chúa vì Lời Ngài còn nguyên giá trị trong mọi thời đại. Lời Chúa giúp chúng ta học biết cách tường tận những điều Chúa dạy dỗ và những công việc Ngài thực thi. Khi áp dụng và làm theo lời Chúa, chúng ta sẽ bày tỏ vinh quang của Ngài qua đời sống chúng ta. \n\nHôm nay, ngày 02/11/2023, chương trình Tĩnh Nguyện Hằng Ngày thân mời quý thính giả cùng suy gẫm Lời Chúa với tác giả Marissa Nordlum qua chủ đề  CÔNG CỤ TRONG TAY CHÚA.\n\n“Ngôi Lời đã trở nên xác thể, sống giữa chúng ta, đầy ân điển và chân lý. Chúng ta đã chiêm ngưỡng vinh quang Ngài, thật là vinh quang của Con Một đến từ nơi Cha.” (Giăng 1:14)\n\n---\nMọi thắc mắc, góp ý hoặc dự phần dâng hiến cùng chương trình, xin hãy liên hệ với chúng tôi qua:\n\nEmail: chiase@oneway.vn\nInbox: m.me/www.oneway.vn\nHotline: 0896 164 199\n\nChúc quý vị một ngày tốt lành. Thân chào và hẹn gặp lại quý vị vào chương trình ngày mai.",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/q6Ugnx62SQU/default.jpg",
                "width": 120,
                "height": 90
            },
            "standard": {
                "url": "https://i.ytimg.com/vi/q6Ugnx62SQU/sddefault.jpg",
                "width": 640,
                "height": 480
            }
        }
    },
    {
        "title": "Hãy Nói Lời Lành | Oneway Radio - Tĩnh Nguyện Hằng Ngày 03/11/2023",
        "id": "DRL-P8jlfTg",
        "description": "Thời gian, cơ hội và lời nói là những điều một khi đã trôi qua hoặc nói ra thì không thể lấy lại được. Lời nói đem đến sự biến đổi nhưng cũng có thể mang đến sự hủy hoại. Khi kiềm chế những cảm xúc tiêu cực và lấp đầy tâm trí bằng những điều tích cực môi miệng chúng ta sẽ luôn nói ra những điều gây dựng người khác. \n\nHôm nay, ngày 03/11/2023, chương trình Tĩnh Nguyện Hằng Ngày thân mời quý thính giả cùng suy gẫm Lời Chúa với tác giả Kimberly Poteet qua chủ đề HÃY NÓI LỜI LÀNH.\n\n“Chớ có một lời độc ác nào ra từ miệng anh em, nhưng khi đáng nói, hãy nói những lời tốt đẹp, có tính xây dựng để đem ơn phước đến cho người nghe.” (Ê-phê-sô 4:29)\n\n---\nMọi thắc mắc, góp ý hoặc dự phần dâng hiến cùng chương trình, xin hãy liên hệ với chúng tôi qua:\n\nEmail: chiase@oneway.vn\nInbox: m.me/www.oneway.vn\nHotline: 0896 164 199\n\nChúc quý vị một ngày tốt lành. Thân chào và hẹn gặp lại quý vị vào chương trình ngày mai.",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/DRL-P8jlfTg/default.jpg",
                "width": 120,
                "height": 90
            },
            "standard": {
                "url": "https://i.ytimg.com/vi/DRL-P8jlfTg/sddefault.jpg",
                "width": 640,
                "height": 480
            }
        }
    },
    {
        "title": "Biệt Riêng Cho Chúa | Oneway Radio - Tĩnh Nguyện Hằng Ngày 04/11/2023",
        "id": "qH-pB5seNok",
        "description": "Trong Cựu Ước, Chúa biệt riêng những thầy tế lễ để bày tỏ Chúa cho dân sự. Ngày nay, Chúa cũng biệt riêng mỗi chúng ta là người tin nhận Ngài để chiếu rọi chân lý và tình yêu của Ngài cho mọi người xung quanh.  \n\nHôm nay, ngày 04/11/2023, chương trình Tĩnh Nguyện Hằng Ngày thân mời quý thính giả cùng suy gẫm Lời Chúa với tác giả Janice Moore qua chủ đề BIỆT RIÊNG CHO CHÚA.\n\n“Nhưng anh chị em không vấp ngã vì đã được chính Đức Chúa Trời tuyển chọn. Anh chị em là thầy tế lễ của Vua Thiên Đàng. Anh chị em là một dân tộc thánh thiện, thuộc về Đức Chúa Trời. Anh chị em được chọn để làm chứng cho mọi người biết Chúa đã đem anh chị em ra khỏi cảnh tối tăm tuyệt vọng đưa vào trong ánh sáng phước hạnh kỳ diệu của Ngài.” (1 Phi-e-rơ 2:9)\n\n---\nMọi thắc mắc, góp ý hoặc dự phần dâng hiến cùng chương trình, xin hãy liên hệ với chúng tôi qua:\n\nEmail: chiase@oneway.vn\nInbox: m.me/www.oneway.vn\nHotline: 0896 164 199\n\nChúc quý vị một ngày tốt lành. Thân chào và hẹn gặp lại quý vị vào chương trình ngày mai.",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/qH-pB5seNok/default.jpg",
                "width": 120,
                "height": 90
            },
            "standard": {
                "url": "https://i.ytimg.com/vi/qH-pB5seNok/sddefault.jpg",
                "width": 640,
                "height": 480
            }
        }
    },
    {
        "title": "Lò Lửa Thử Thách | Oneway Radio - Tĩnh Nguyện Hằng Ngày 05/11/2023",
        "id": "XvvLy1cKkao",
        "description": "Nhiều người run sợ và ngã lòng trước những thử thách và biến cố xảy đến. Chắc hẳn không ai muốn bản thân phải chịu thử thách. Nhưng nếu Chúa cho phép điều đó xảy ra thì Ngài sẽ dùng điều ấy cho mục đích tốt đẹp của Ngài. Một trong những vai trò của thử thách là giúp đức tin của chúng ta tăng trưởng. Chúng ta sẽ được tôi luyện và hun đúc để trở nên công cụ hiệu quả trong công việc nhà Chúa.  \n\nHôm nay, ngày 05/11/2023, chương trình Tĩnh Nguyện Hằng Ngày thân mời quý thính giả cùng suy gẫm Lời Chúa với tác giả Kimberly Poteet qua chủ đề LÒ LỬA THỬ THÁCH.\n\n“Thưa anh em yêu dấu, khi lửa thử thách đến để thử nghiệm anh em thì đừng ngạc nhiên như mình gặp một việc khác thường. Nhưng anh em dự phần trong sự thương khó của Đấng Christ bao nhiêu thì hãy vui mừng bấy nhiêu; để khi vinh quang của Ngài được bày tỏ, anh em cũng được vui mừng, hoan hỉ.” (1 Phi-e-rơ 4:12-13) \n\n---\nMọi thắc mắc, góp ý hoặc dự phần dâng hiến cùng chương trình, xin hãy liên hệ với chúng tôi qua:\n\nEmail: chiase@oneway.vn\nInbox: m.me/www.oneway.vn\nHotline: 0896 164 199\n\nChúc quý vị một ngày tốt lành. Thân chào và hẹn gặp lại quý vị vào chương trình ngày mai.",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/XvvLy1cKkao/default.jpg",
                "width": 120,
                "height": 90
            },
            "standard": {
                "url": "https://i.ytimg.com/vi/XvvLy1cKkao/sddefault.jpg",
                "width": 640,
                "height": 480
            }
        }
    },
    {
        "title": "Tiếng Kèn Cảnh Báo | Oneway Radio - Tĩnh Nguyện Hằng Ngày 06/11/2023",
        "id": "IliWIUmE5t4",
        "description": "Khi nghe những tiếng chuông báo động, chẳng hạn như hỏa hoạn, bạn sẽ làm gì? Thật nguy hiểm nếu chúng ta bỏ qua những tiếng chuông báo hiệu hoặc những lời cảnh báo. Chúa muốn chúng ta phải tiết độ và tỉnh thức để hoàn thành vai trò người canh gác của Chúa. Chúng ta không những lắng nghe lời cảnh báo nhưng phải rao báo cho những người khác cùng biết. \n\nHôm nay, ngày 06/11/2023, chương trình Tĩnh Nguyện Hằng Ngày thân mời quý thính giả cùng suy gẫm Lời Chúa qua chủ đề TIẾNG KÈN CẢNH BÁO.\n\n“Hãy tiết độ và tỉnh thức; kẻ thù anh em là ma quỷ, như sư tử gầm thét, đang rình rập chung quanh anh em, tìm người để cắn nuốt. Hãy đứng vững trong đức tin mà kháng cự nó, vì biết rằng anh em cùng niềm tin trên khắp thế giới cũng đang chịu hoạn nạn như mình. Và sau khi anh em phải chịu khổ ít lâu, Đức Chúa Trời của mọi ân điển, Đấng đã gọi anh em đến vinh quang đời đời của Ngài trong Đấng Christ, chính Ngài sẽ phục hồi, củng cố, xây dựng và ban sức lực cho anh em. ” (1 Phi-e-rơ 5:8-10)\n\n---\nMọi thắc mắc, góp ý hoặc dự phần dâng hiến cùng chương trình, xin hãy liên hệ với chúng tôi qua:\n\nEmail: chiase@oneway.vn\nInbox: m.me/www.oneway.vn\nHotline: 0896 164 199\n\nChúc quý vị một ngày tốt lành. Thân chào và hẹn gặp lại quý vị vào chương trình ngày mai.",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/IliWIUmE5t4/default.jpg",
                "width": 120,
                "height": 90
            },
            "standard": {
                "url": "https://i.ytimg.com/vi/IliWIUmE5t4/sddefault.jpg",
                "width": 640,
                "height": 480
            }
        }
    },
    {
        "title": "Sự Kêu Gọi Từ Cha Dấu Yêu | Oneway Radio - Tĩnh Nguyện Hằng Ngày 07/11/2023",
        "id": "GueEvOtWtKI",
        "description": "Tình yêu của người cha thật lớn lao và cao quý, nhất là những người cha đã hy sinh cuộc đời mình để lo lắng cho các con. Đức Chúa Trời là Cha Thiên Thượng đã yêu chúng ta bằng tình yêu vô điều kiện. Đó là khi chúng ta còn sống trong tội lỗi, Ngài bằng lòng sai Con Một Ngài đến thế gian chịu chết vì chúng ta. Qua đó, Ngài mời gọi chúng ta tin nhận Chúa Jêsus để được tha tội, trở nên con cái Ngài và kinh nghiệm phước hạnh trong gia đình của Đức Chúa Trời.\n\nHôm nay, ngày 07/11/2023, chương trình Tĩnh Nguyện Hằng Ngày thân mời quý thính giả cùng suy gẫm Lời Chúa qua chủ đề SỰ KÊU GỌI TỪ CHA DẤU YÊU.\n\n“Bởi quyền năng thiên thượng, Đức Chúa Trời đã ban cho anh chị em mọi nhu cầu để sống cuộc đời tin kính. Chúng ta đã nhận được tất cả những phước hạnh này khi nhận biết Đấng đã kêu gọi chúng ta đến với Ngài bằng vinh quang và nhân đức của Ngài. Cũng với quyền năng ấy, Ngài đã ban cho chúng ta mọi phước lành quý báu kỳ diệu mà Ngài đã hứa, giải thoát chúng ta khỏi mọi dục vọng, băng hoại đang ngự trị khắp nơi, và cho chúng ta được có cùng bản tính với Ngài.” (2 Phi-e-rơ 1:3-4)\n\n---\nMọi thắc mắc, góp ý hoặc dự phần dâng hiến cùng chương trình, xin hãy liên hệ với chúng tôi qua:\n\nEmail: chiase@oneway.vn\nInbox: m.me/www.oneway.vn\nHotline: 0896 164 199\n\nChúc quý vị một ngày tốt lành. Thân chào và hẹn gặp lại quý vị vào chương trình ngày mai.",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/GueEvOtWtKI/default.jpg",
                "width": 120,
                "height": 90
            },
            "standard": {
                "url": "https://i.ytimg.com/vi/GueEvOtWtKI/sddefault.jpg",
                "width": 640,
                "height": 480
            }
        }
    },
    {
        "title": "Sự Sống Mới | Oneway Radio - Tĩnh Nguyện Hằng Ngày 08/11/2023",
        "id": "vcDV56Y9mq4",
        "description": "Có một lẽ thật trong Kinh Thánh mà không phải ai cũng hiểu cách rõ ràng. Đó là Chúa Jêsus không chịu chết để biến người xấu trở nên người tốt. Ngài không chịu chết để biến người tốt trở nên tốt hơn. Nhưng thay vào đó, Ngài chịu chết để biến những người chết trở nên sống. Bởi đức tin nơi Chúa, chúng ta vốn là những người hư mất, được trở nên tạo vật mới trong Ngài và được hưởng niềm vui trong sự sống mới nơi Ngài.  \n\nHôm nay, ngày 08/11/2023, chương trình Tĩnh Nguyện Hằng Ngày thân mời quý thính giả cùng suy gẫm Lời Chúa với tác giả Matt Levy qua chủ đề SỰ SỐNG MỚI.\n\n“Vậy, nếu ai ở trong Đấng Christ, người ấy là tạo vật mới, những gì cũ đã qua đi, này, mọi sự đều trở nên mới.” (2 Cô-rinh-tô 5:17)\n\n---\nMọi thắc mắc, góp ý hoặc dự phần dâng hiến cùng chương trình, xin hãy liên hệ với chúng tôi qua:\n\nEmail: chiase@oneway.vn\nInbox: m.me/www.oneway.vn\nHotline: 0896 164 199\n\nChúc quý vị một ngày tốt lành. Thân chào và hẹn gặp lại quý vị vào chương trình ngày mai.",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/vcDV56Y9mq4/default.jpg",
                "width": 120,
                "height": 90
            },
            "standard": {
                "url": "https://i.ytimg.com/vi/vcDV56Y9mq4/sddefault.jpg",
                "width": 640,
                "height": 480
            }
        }
    },
    {
        "title": "Tạo Nên Điều Khác Biệt | Oneway Radio - Tĩnh Nguyện Hằng Ngày 09/11/2023",
        "id": "CVBWS-xRHes",
        "description": "Làm thế nào để tạo nên sự khác biệt, để thay đổi những bất công của thế giới này, để chấm dứt những tội ác, những sự bắt bớ vẫn đang diễn ra khắp nơi? Có thể bạn đang trăn trở với những điều như vậy và cảm thấy thật bất lực vì mình không thể làm gì. Nhưng thực ra chúng ta có thể tạo nên sự khác biệt bằng lời cầu nguyện của mình. Chúng ta không ra trận bằng những vũ khí đời này nhưng chúng ta được trang bị bằng lời của Chúa và tiếp sức từ sự cầu nguyện của tất cả anh chị em cùng đức tin. Chúa sẽ chiến đấu thay chúng ta, việc của chúng ta là vâng theo Ngài và hiệp lòng cầu nguyện cho anh em để cùng tạo nên điều khác biệt. \n\nHôm nay, ngày 09/11/2023, chương trình Tĩnh Nguyện Hằng Ngày thân mời quý thính giả cùng suy gẫm Lời Chúa với tác giả Steven Halter qua chủ đề TẠO NÊN ĐIỀU KHÁC BIỆT\n\n“Hãy thường xuyên dùng mọi lời khẩn nguyện, nài xin, mà cầu nguyện trong Thánh Linh. Để đạt mục tiêu này, hãy kiên trì, tỉnh thức, và cầu nguyện cho tất cả các thánh đồ.” (Ê-phê-sô 6:18)\n\n---\nMọi thắc mắc, góp ý hoặc dự phần dâng hiến cùng chương trình, xin hãy liên hệ với chúng tôi qua:\n\nEmail: chiase@oneway.vn\nInbox: m.me/www.oneway.vn\nHotline: 0896 164 199\n\nChúc quý vị một ngày tốt lành. Thân chào và hẹn gặp lại quý vị vào chương trình ngày mai.",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/CVBWS-xRHes/default.jpg",
                "width": 120,
                "height": 90
            },
            "standard": {
                "url": "https://i.ytimg.com/vi/CVBWS-xRHes/sddefault.jpg",
                "width": 640,
                "height": 480
            }
        }
    },
    {
        "title": "Bước Đi Trong Ánh Sáng | Oneway Radio - Tĩnh Nguyện Hằng Ngày 10/11/2023",
        "id": "gEbmWQ5Txv0",
        "description": "Là con cái Chúa, dù chúng ta ở đâu, làm gì thì hãy luôn nhớ rằng Đức Chúa Trời luôn luôn hiện diện trong cuộc đời chúng ta. Chúa vui lòng khi nhìn thấy chúng ta từ bỏ con đường tội lỗi để bước theo con đường sáng láng dẫn đến sự sống đời đời. Lời Chúa sẽ soi lối và chỉ dẫn chúng ta sống đẹp lòng Chúa mỗi ngày.\n\nHôm nay, ngày 10/11/2023, chương trình Tĩnh Nguyện Hằng Ngày thân mời quý thính giả cùng suy gẫm Lời Chúa với tác giả Jennifer Scribner qua chủ đề BƯỚC ĐI TRONG ÁNH SÁNG.\n\n“Nhưng nếu chúng ta bước đi trong ánh sáng, cũng như chính Ngài ở trong ánh sáng, thì chúng ta được tương giao với nhau, và huyết của Đức Chúa Jêsus, Con Ngài, tẩy sạch mọi tội của chúng ta.” (1 Giăng 1:7)\n\n---\nMọi thắc mắc, góp ý hoặc dự phần dâng hiến cùng chương trình, xin hãy liên hệ với chúng tôi qua:\n\nEmail: chiase@oneway.vn\nInbox: m.me/www.oneway.vn\nHotline: 0896 164 199\n\nChúc quý vị một ngày tốt lành. Thân chào và hẹn gặp lại quý vị vào chương trình ngày mai.",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/gEbmWQ5Txv0/default.jpg",
                "width": 120,
                "height": 90
            },
            "standard": {
                "url": "https://i.ytimg.com/vi/gEbmWQ5Txv0/sddefault.jpg",
                "width": 640,
                "height": 480
            }
        }
    },
    {
        "title": "Môn Đồ Thật Của Chúa Jêsus | Oneway Radio - Tĩnh Nguyện Hằng Ngày 11/11/2023",
        "id": "1Hnbuwn0K3I",
        "description": "Khi đứng trước những hoàn cảnh khó khăn, có bao giờ bạn tự hỏi rằng: “Chúa Jêsus sẽ làm gì trong hoàn cảnh này”? Chúng ta nói mình là môn đồ của Chúa Jêsus, liệu chúng ta có giống như Ngài không? Hoặc chúng ta chỉ đơn giản là người ngưỡng mộ Ngài mà thôi? Một môn đồ thật của Chúa Jêsus là người luôn làm theo lời Chúa và sống đúng những điều mà Chúa đã truyền dạy. \n\nHôm nay, ngày 11/11/2023, chương trình Tĩnh Nguyện Hằng Ngày thân mời quý thính giả cùng suy gẫm Lời Chúa qua chủ đề MÔN ĐỒ THẬT CỦA CHÚA JÊSUS.\n\n“Nhưng ai vâng giữ lời Ngài thì sự kính mến Đức Chúa Trời thật là hoàn hảo trong người ấy. Nhờ đó, chúng ta biết mình ở trong Ngài.” (1 Giăng 2:5-6)\n\n---\nMọi thắc mắc, góp ý hoặc dự phần dâng hiến cùng chương trình, xin hãy liên hệ với chúng tôi qua:\n\nEmail: chiase@oneway.vn\nInbox: m.me/www.oneway.vn\nHotline: 0896 164 199\n\nChúc quý vị một ngày tốt lành. Thân chào và hẹn gặp lại quý vị vào chương trình ngày mai.",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/1Hnbuwn0K3I/default.jpg",
                "width": 120,
                "height": 90
            },
            "standard": {
                "url": "https://i.ytimg.com/vi/1Hnbuwn0K3I/sddefault.jpg",
                "width": 640,
                "height": 480
            }
        }
    },
    {
        "title": "Được Làm Con Của Chúa | Oneway Radio - Tĩnh Nguyện Hằng Ngày 12/11/2023",
        "id": "3IUltBBmLpw",
        "description": "Được làm con cái của Đức Chúa Trời là điều hạnh phúc nhất trong cuộc đời của chúng ta. Ở trong sự hiện diện của Chúa, chúng ta sẽ nhận được tình yêu, sự bình an và biết được ý nghĩa thực sự của cuộc đời mình. Chúa luôn chào đón và sẵn sàng nhận chúng ta làm con cái của Chúa và trở thành thành viên trong đại gia đình của Ngài. \n\nHôm nay, ngày 12/11/2023, chương trình Tĩnh Nguyện Hằng Ngày thân mời quý thính giả cùng suy gẫm Lời Chúa với tác giả Carolyn Fraiser qua chủ đề ĐƯỢC LÀM CON CỦA CHÚA.\n\n“Nhưng nếu chúng ta bước đi trong ánh sáng, cũng như chính Ngài ở trong ánh sáng, thì chúng ta được tương giao với nhau, và huyết của Đức Chúa Jêsus, Con Ngài, tẩy sạch mọi tội của chúng ta.” (1 Giăng 1:7)\n\n---\nMọi thắc mắc, góp ý hoặc dự phần dâng hiến cùng chương trình, xin hãy liên hệ với chúng tôi qua:\n\nEmail: chiase@oneway.vn\nInbox: m.me/www.oneway.vn\nHotline: 0896 164 199\n\nChúc quý vị một ngày tốt lành. Thân chào và hẹn gặp lại quý vị vào chương trình ngày mai.",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/3IUltBBmLpw/default.jpg",
                "width": 120,
                "height": 90
            },
            "standard": {
                "url": "https://i.ytimg.com/vi/3IUltBBmLpw/sddefault.jpg",
                "width": 640,
                "height": 480
            }
        }
    },
    {
        "title": "Bình An Thật | Oneway Radio - Tĩnh Nguyện Hằng Ngày 13/11/2023",
        "id": "8b53exd7wjg",
        "description": "Làm sao có thể hưởng được bình an trong một thế giới đầy hỗn loạn? Dù trong cuộc sống có nhiều điều xảy ra không như mong muốn của chúng ta nhưng ở trong Chúa chúng ta có sự bình an thật. Chúa sẽ ban sự bình an đời đời cho những ai tìm kiếm Ngài hết lòng. \n\nHôm nay, ngày 13/11/2023, chương trình Tĩnh Nguyện Hằng Ngày thân mời quý thính giả cùng suy gẫm Lời Chúa với tác giả Gene Markland qua chủ đề BÌNH AN THẬT.\n\n“Người nào để tâm trí mình nương cậy nơi Chúa thì Ngài sẽ gìn giữ người trong sự bình an trọn vẹn, vì người tin cậy Ngài.” (Ê-sai 26:3)\n\n---\nMọi thắc mắc, góp ý hoặc dự phần dâng hiến cùng chương trình, xin hãy liên hệ với chúng tôi qua:\n\nEmail: chiase@oneway.vn\nInbox: m.me/www.oneway.vn\nHotline: 0896 164 199\n\nChúc quý vị một ngày tốt lành. Thân chào và hẹn gặp lại quý vị vào chương trình ngày mai.",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/8b53exd7wjg/default.jpg",
                "width": 120,
                "height": 90
            },
            "standard": {
                "url": "https://i.ytimg.com/vi/8b53exd7wjg/sddefault.jpg",
                "width": 640,
                "height": 480
            }
        }
    },
    {
        "title": "Đấng Chữa Lành Mọi Tan Vỡ | Oneway Radio - Tĩnh Nguyện Hằng Ngày 14/11/2023",
        "id": "C6xOi-bvbTM",
        "description": "Người có tấm lòng bị tổn thương thường sống khép kín và ít giao tiếp với mọi người. Bên ngoài họ cố tỏ ra mọi thứ đều ổn nhưng sâu thẳm bên trong họ cần được yêu thương và quan tâm. Chỉ duy tình yêu thương của Chúa mới có thể chữa lành cho mọi tổn thương và tan vỡ. Ngài bày tỏ tình yêu thương thay vì kết tội, ban hy vọng thay vì tuyệt vọng và đem đến sự biến đổi và phục hồi. \n\nHôm nay, ngày 14/11/2023, chương trình Tĩnh Nguyện Hằng Ngày thân mời quý thính giả cùng suy gẫm Lời Chúa với tác giả Michael Plemmons qua chủ đề ĐẤNG CHỮA LÀNH MỌI TAN VỠ.\n\n“Chúa chữa lành tấm lòng tan vỡ và băng bó những vết thương..” (Thi Thiên 147:3)\n\n---\nMọi thắc mắc, góp ý hoặc dự phần dâng hiến cùng chương trình, xin hãy liên hệ với chúng tôi qua:\n\nEmail: chiase@oneway.vn\nInbox: m.me/www.oneway.vn\nHotline: 0896 164 199\n\nChúc quý vị một ngày tốt lành. Thân chào và hẹn gặp lại quý vị vào chương trình ngày mai.",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/C6xOi-bvbTM/default.jpg",
                "width": 120,
                "height": 90
            },
            "standard": {
                "url": "https://i.ytimg.com/vi/C6xOi-bvbTM/sddefault.jpg",
                "width": 640,
                "height": 480
            }
        }
    },
    {
        "title": "Bắt Chước Điều Lành | Oneway Radio - Tĩnh Nguyện Hằng Ngày 15/11/2023",
        "id": "ZGMjcb8P5HU",
        "description": "Tốc độ lây lan của cái xấu thường nhanh hơn rất nhiều so với điều tốt. Việc làm theo điều tốt phụ thuộc vào hình mẫu mà chúng ta chăm xem và môi trường xung quanh. Là người thuộc về Chúa, chúng ta phải bắt chước điều lành, và đồng thời trở thành một tấm gương ảnh hưởng những người xung quanh làm điều lành.  \n\nHôm nay, ngày 15/11/2023, chương trình Tĩnh Nguyện Hằng Ngày thân mời quý thính giả cùng suy gẫm Lời Chúa với tác giả Janice Moore qua chủ đề BẮT CHƯỚC ĐIỀU LÀNH.\n\n“Thưa anh quý mến, đừng bắt chước điều dữ, nhưng hãy bắt chước điều lành. Ai làm điều lành thì thuộc về Đức Chúa Trời; còn ai làm điều dữ thì không hề thấy Đức Chúa Trời.” (3 Giăng 1:11)\n\n---\nMọi thắc mắc, góp ý hoặc dự phần dâng hiến cùng chương trình, xin hãy liên hệ với chúng tôi qua:\n\nEmail: chiase@oneway.vn\nInbox: m.me/www.oneway.vn\nHotline: 0896 164 199\n\nChúc quý vị một ngày tốt lành. Thân chào và hẹn gặp lại quý vị vào chương trình ngày mai.",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/ZGMjcb8P5HU/default.jpg",
                "width": 120,
                "height": 90
            },
            "standard": {
                "url": "https://i.ytimg.com/vi/ZGMjcb8P5HU/sddefault.jpg",
                "width": 640,
                "height": 480
            }
        }
    },
    {
        "title": "Chiên Giữa Bầy Muông Sói | Oneway Radio - Tĩnh Nguyện Hằng Ngày 16/11/2023",
        "id": "8NWGhpi7MjE",
        "description": "Người tin Chúa sống giữa trần gian này được ví như ‘chiên giữa bầy muông sói’. Ma quỷ luôn tìm mọi cách để tấn công chúng ta, kéo chúng ta ra khỏi Chúa, vùi dập đức tin của chúng ta. Điều quan trọng là chúng ta phải tỉnh thức, nhận diện kẻ thù, cảnh giác trước những đòn tấn công, và trên hết là nương dựa nơi Chúa để đắc thắng.\n\nHôm nay, ngày 16/11/2023, chương trình Tĩnh Nguyện Hằng Ngày thân mời quý thính giả cùng suy gẫm Lời Chúa với tác giả Iliamari Mendoza-Gomez qua chủ đề CHIÊN GIỮA BẦY MUÔNG SÓI.\n\n“Này, Ta sai các con đi như chiên giữa bầy muông sói. Vậy hãy khôn khéo như rắn, đơn sơ như chim bồ câu.” (Ma-thi-ơ 10:16)\n\n---\nMọi thắc mắc, góp ý hoặc dự phần dâng hiến cùng chương trình, xin hãy liên hệ với chúng tôi qua:\n\nEmail: chiase@oneway.vn\nInbox: m.me/www.oneway.vn\nHotline: 0896 164 199\n\nChúc quý vị một ngày tốt lành. Thân chào và hẹn gặp lại quý vị vào chương trình ngày mai.",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/8NWGhpi7MjE/default.jpg",
                "width": 120,
                "height": 90
            },
            "standard": {
                "url": "https://i.ytimg.com/vi/8NWGhpi7MjE/sddefault.jpg",
                "width": 640,
                "height": 480
            }
        }
    },
    {
        "title": "Ta Là Ai Với Con? | Oneway Radio - Tĩnh Nguyện Hằng Ngày 17/11/2023",
        "id": "13DOt-nbsfo",
        "description": "Những hoạn nạn và thử thách xảy đến trong cuộc đời chính là bài kiểm tra bộc lộ rõ nhất tình trạng đức tin của chúng ta. Cách chúng ta đối diện với thử thách sẽ bày tỏ cho mọi người biết chúng ta thật là con cái của Đức Chúa Trời. Bởi vì khi chúng ta biết mình là ai, biết Chúa là ai, thì điều đó sẽ quyết định cách chúng ta đối mặt với khủng hoảng. Bạn sẽ trả lời thế nào khi Chúa hỏi, “Ta là ai với con?”\n\nHôm nay, ngày 17/11/2023, chương trình Tĩnh Nguyện Hằng Ngày thân mời quý thính giả cùng suy gẫm Lời Chúa qua chủ đề TA LÀ AI VỚI CON?\n\nNgài phán rằng: “Còn các con thì nói Ta là ai?” Si-môn Phi-e-rơ thưa rằng: “Thầy là Đấng Christ, Con Đức Chúa Trời hằng sống.” (Ma-thi-ơ 16:15-16) \n\n---\nMọi thắc mắc, góp ý hoặc dự phần dâng hiến cùng chương trình, xin hãy liên hệ với chúng tôi qua:\n\nEmail: chiase@oneway.vn\nInbox: m.me/www.oneway.vn\nHotline: 0896 164 199\n\nChúc quý vị một ngày tốt lành. Thân chào và hẹn gặp lại quý vị vào chương trình ngày mai.",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/13DOt-nbsfo/default.jpg",
                "width": 120,
                "height": 90
            },
            "standard": {
                "url": "https://i.ytimg.com/vi/13DOt-nbsfo/sddefault.jpg",
                "width": 640,
                "height": 480
            }
        }
    },
    {
        "title": "Cả Thiên Đàng Tôn Vinh Chúa | Oneway Radio - Tĩnh Nguyện Hằng Ngày 18/11/2023",
        "id": "iHA7Bvrt_Jk",
        "description": "Có bao giờ bạn mường tượng khung cảnh trên Thiên Đàng sẽ như thế nào không? Bạn có háo hức đến ngày được gặp Chúa và thờ phượng Ngài nơi vương quốc đời đời không? Lời Chúa bày tỏ cho chúng ta biết về quang cảnh  nơi miền vinh hiển ngập tràn tiếng ca tôn vinh chúc tụng Danh Thánh của Đức Chúa Trời. \n\nHôm nay, ngày 18/11/2023, chương trình Tĩnh Nguyện Hằng Ngày thân mời quý thính giả cùng suy gẫm Lời Chúa với tác giả Vernell Windsor qua chủ đề CẢ THIÊN ĐÀNG TÔN VINH CHÚA.\n\n“Thánh thay, thánh thay, thánh thay, Chúa là Đức Chúa Trời Toàn Năng,\nĐẤNG ĐÃ CÓ, HIỆN CÓ VÀ ĐANG ĐẾN!” (Khải Huyền 4:8)\n\n---\nMọi thắc mắc, góp ý hoặc dự phần dâng hiến cùng chương trình, xin hãy liên hệ với chúng tôi qua:\n\nEmail: chiase@oneway.vn\nInbox: m.me/www.oneway.vn\nHotline: 0896 164 199\n\nChúc quý vị một ngày tốt lành. Thân chào và hẹn gặp lại quý vị vào chương trình ngày mai.",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/iHA7Bvrt_Jk/default.jpg",
                "width": 120,
                "height": 90
            },
            "standard": {
                "url": "https://i.ytimg.com/vi/iHA7Bvrt_Jk/sddefault.jpg",
                "width": 640,
                "height": 480
            }
        }
    }
]

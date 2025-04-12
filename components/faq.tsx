import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CircleHelp,
  CreditCard,
  Mail,
  RefreshCw,
  Settings,
  Users,
  FileText,
  HelpCircle,
} from "lucide-react";

const faqs = [
  {
    icon: <CircleHelp className="size-5" />,
    question: "Tôi cần đặt mâm cúng trước bao lâu?",
    answer: (
      <>
        Bạn nên đặt trước ít nhất 48 tiếng để chúng tôi chuẩn bị đầy đủ và
        chu đáo nhất.
      </>
    ),
  },
  {
    icon: <Settings className="size-5" />,
    question: "Tôi có thể thay đổi gói dịch vụ sau khi đã đặt không?",
    answer:
      "Có! Bạn có thể thay đổi gói dịch vụ bất cứ lúc nào. Chúng tôi sẽ hỗ trợ bạn thay đổi một cách nhanh chóng.",
  },
  {
    icon: <RefreshCw className="size-5" />,
    question: "Chính sách hủy dịch vụ của bên bạn như thế nào?",
    answer:
      "Bạn có thể hủy dịch vụ bất cứ lúc nào trước 24 tiếng. Chúng tôi sẽ hoàn lại tiền cho bạn theo chính sách của công ty.",
  },
  {
    icon: <Users className="size-5" />,
    question: "Tôi có thể yêu cầu thêm thông tin gì trên hóa đơn không?",
    answer:
      "Có, bạn có thể yêu cầu thêm thông tin công ty, mã số thuế hoặc các yêu cầu khác trên hóa đơn.",
  },
  {
    icon: <CreditCard className="size-5" />,
    question: "Tôi có thể thanh toán bằng hình thức nào?",
    answer:
      "Chúng tôi hỗ trợ thanh toán bằng tiền mặt khi nhận hàng hoặc chuyển khoản qua ngân hàng.",
  },
  {
    icon: <Mail className="size-5" />,
    question: "Tôi muốn thay đổi email tài khoản thì làm thế nào?",
    answer:
      "Bạn có thể thay đổi email tài khoản trong phần cài đặt tài khoản. Chúng tôi sẽ gửi email xác nhận đến email mới của bạn.",
  },
  {
    icon: <HelpCircle className="size-5" />,
    question: "Tôi có thể liên hệ hỗ trợ bằng cách nào?",
    answer:
      "Bạn có thể liên hệ với chúng tôi qua số điện thoại hotline, email hoặc chat trực tiếp trên website.",
  },
  {
    icon: <FileText className="size-5" />,
    question: "Bên bạn có cung cấp hướng dẫn không?",
    answer:
      "Có, chúng tôi cung cấp đầy đủ hướng dẫn và tài liệu để bạn có thể sử dụng dịch vụ một cách dễ dàng nhất.",
  },
];

export default function FrequentlyAskedQuestions11() {
  return (
    <div className="container mx-auto w-full max-w-3xl px-4 py-0">
      <div className="relative pb-4text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Câu hỏi thường gặp
        </h2>
        <p className="mt-4 text-muted-foreground">
          Những câu hỏi thường gặp nhất về dịch vụ mâm cúng của chúng tôi.
          <br />
          Không tìm thấy câu trả lời bạn cần?{" "}
          <a
            href="#"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Liên hệ với chúng tôi ngay!
          </a>
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b"
          >
            <AccordionTrigger className="py-4 transition-all hover:no-underline [&[data-state=open]>div>svg]:rotate-180">
              <div className="flex w-full items-center text-left">
                <div className="mr-6 flex size-10 shrink-0 items-center justify-center rounded-lg border text-primary">
                  {faq.icon}
                </div>
                <span className="flex-grow font-medium">{faq.question}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-16 pb-4 pt-0">
              <div className="text-muted-foreground">{faq.answer}</div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

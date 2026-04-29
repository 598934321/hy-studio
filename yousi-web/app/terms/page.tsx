"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

const sections = [
  {
    title: "一、服务说明",
    content: [
      "有思网（以下简称'我们'）通过线上平台为用户提供幼儿园品牌设计、环境设计、VI 设计及相关咨询服务（以下简称'服务'）。",
      "用户在使用本平台服务前，应仔细阅读并充分理解本条款的全部内容。一旦您使用本平台的任何服务，即表示您已阅读、理解并同意接受本条款的约束。",
      "我们保留随时修改本条款的权利，修改后的条款将在平台上公布，不再另行通知。继续使用本平台服务即视为接受修改后的条款。",
    ],
  },
  {
    title: "二、费用与支付",
    content: [
      "本平台展示的所有服务价格均以人民币（CNY）为单位，具体价格以用户下单时页面显示为准。",
      "用户应按照订单金额及时完成支付。我们支持银行转账、支付宝、微信支付等多种支付方式。",
      "如因用户原因导致订单取消，已支付的定金不予退还。如因我方原因导致服务无法正常提供，我们将全额退款。",
      "所有定制服务的尾款应在项目验收合格后 7 个工作日内支付完毕。",
    ],
  },
  {
    title: "三、知识产权",
    content: [
      "在用户全额支付服务费用后，与项目相关的最终设计成果的著作权（署名权除外）归用户所有。",
      "在项目完成之前，所有设计稿件、方案及相关文件的知识产权归我们所有，未经授权不得使用、复制或传播。",
      "我们有权将完成的项目作品用于案例展示、宣传推广等用途，除非用户在合同签订时明确提出书面异议。",
      "用户提供的品牌资料、图片素材等知识产权归用户所有，我们仅在本项目范围内使用。",
    ],
  },
  {
    title: "四、保密条款",
    content: [
      "双方在合作过程中获知的对方商业秘密、技术信息、客户资料等保密信息，未经对方书面同意，不得向任何第三方披露。",
      "保密义务在合同终止后仍然有效，保密期限为合同终止之日起两年。",
      "以下信息不属于保密范围：在披露时已为公众所知的信息；非因接收方过错而成为公众所知的信息；接收方在接收前已合法拥有的信息。",
    ],
  },
  {
    title: "五、免责声明",
    content: [
      "因不可抗力（包括但不限于自然灾害、政策变化、网络故障等）导致服务中断或延迟的，我们不承担违约责任。",
      "用户应对其账户信息的安全性负责。因用户自身原因导致的账户信息泄露或损失，我们不承担责任。",
      "本平台可能包含第三方网站的链接，我们对第三方网站的内容、隐私政策或行为不承担任何责任。",
      "我们的服务按'现状'提供，不对服务的及时性、安全性、准确性做出绝对保证。",
    ],
  },
  {
    title: "六、其他条款",
    content: [
      "本条款的解释、效力及争议解决均适用中华人民共和国法律。",
      "因本条款引起的或与本条款有关的任何争议，双方应首先友好协商解决；协商不成的，任何一方均可向有管辖权的人民法院提起诉讼。",
      "本条款中的任何条款被认定为无效或不可执行的，不影响其他条款的效力。",
      "本条款构成双方之间就本条款所述事项的完整协议，取代此前双方就该事项达成的所有口头或书面协议。",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />

      <main>
        {/* Title */}
        <section
          style={{
            padding: "120px 24px 60px",
            textAlign: "center",
            background: "var(--color-bg)",
          }}
        >
          <RevealOnScroll>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-hero)",
                fontWeight: "var(--weight-bold)",
                letterSpacing: "var(--tracking-tight)",
                lineHeight: "var(--leading-tight)",
                color: "var(--color-text-primary)",
              }}
            >
              服务条款
            </h1>
          </RevealOnScroll>
        </section>

        {/* Content */}
        <section
          style={{
            maxWidth: 720,
            margin: "0 auto",
            padding: "0 24px 120px",
          }}
        >
          <p
            style={{
              fontSize: "var(--text-footnote)",
              fontFamily: "var(--font-text)",
              color: "var(--color-text-secondary)",
              marginBottom: "var(--space-12)",
            }}
          >
            最后更新日期：2026 年 4 月 1 日
          </p>

          {sections.map((section, index) => (
            <RevealOnScroll key={index}>
              <div
                style={{
                  marginBottom: "var(--space-12)",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-subtitle)",
                    fontWeight: "var(--weight-semibold)",
                    color: "var(--color-text-primary)",
                    marginBottom: "var(--space-5)",
                  }}
                >
                  {section.title}
                </h2>
                {section.content.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    style={{
                      fontSize: "var(--text-body)",
                      fontFamily: "var(--font-text)",
                      color: "var(--color-text-secondary)",
                      lineHeight: "var(--leading-relaxed)",
                      marginBottom: "var(--space-4)",
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </RevealOnScroll>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

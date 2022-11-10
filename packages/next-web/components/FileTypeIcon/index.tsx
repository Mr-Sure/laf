import React from "react";
import { Icon } from "@chakra-ui/icons";

export const FileType = {
  js: "js",
  ts: "ts",
  json: "json",
  html: "html",
  css: "css",
  png: "png",
  jpg: "jpg",
  jpeg: "jpeg",
  gif: "gif",
  svg: "svg",
  txt: "txt",
  md: "md",
  pdf: "pdf",
  doc: "doc",
  docx: "docx",
  xls: "xls",
  xlsx: "xlsx",
  ppt: "ppt",
  pptx: "pptx",
  zip: "zip",
  rar: "rar",
  tar: "tar",
  folder: "folder",
  npm: "npm",
  db: "db",
  bucket: "bucket",
};

export default function FileTypeIcon(props: { type: string }) {
  const { type } = props;

  switch (type) {
    case FileType.js:
      return (
        <Icon viewBox="0 0 46 46" fontSize={20} className="align-middle">
          <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
          <path
            fill="#000001"
            d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
          ></path>
        </Icon>
      );

    case FileType.npm:
      return (
        <Icon viewBox="0 0 32 12" fontSize={22} className="align-middle">
          <path
            d="M16 7.11111H14.2222V3.55556H16V7.11111ZM32 0V10.6667H16V12.4444H8.88889V10.6667H0V0H32ZM8.88889 1.77778H1.77778V8.88889H5.33333V3.55556H7.11111V8.88889H8.88889V1.77778ZM17.7778 1.77778H10.6667V10.6667H14.2222V8.88889H17.7778V1.77778ZM30.2222 1.77778H19.5556V8.88889H23.1111V3.55556H24.8889V8.88889H26.6667V3.55556H28.4444V8.88889H30.2222V1.77778Z"
            fill="#CB3837"
          />
        </Icon>
      );

    case FileType.db:
      return (
        <Icon viewBox="0 0 20 20" fontSize={14} className="align-middle">
          <path
            d="M17.2039 3.6986L10.6238 0.308337C10.2279 0.105682 9.7895 0 9.34474 0C8.89998 0 8.46159 0.105682 8.06569 0.308337L1.48558 3.71914C1.03222 3.93986 0.651482 4.2857 0.388334 4.71583C0.125186 5.14595 -0.00938599 5.6424 0.000508938 6.14654V13.8314C0.00572326 14.3348 0.146366 14.8275 0.407673 15.2578C0.668979 15.6881 1.04131 16.0401 1.48558 16.2769L8.10739 19.6877C8.50118 19.8963 8.94083 20.0032 9.38644 19.9989C9.83149 19.9985 10.27 19.8918 10.6655 19.6877L17.2045 16.2974C17.6527 16.0654 18.0283 15.7144 18.2902 15.2831C18.5522 14.8517 18.6903 14.3566 18.6896 13.852V6.12537C18.6888 5.62341 18.5499 5.13134 18.2879 4.70315C18.0259 4.27496 17.6511 3.92718 17.2045 3.69798L17.2039 3.6986ZM8.72606 1.52017C8.91675 1.41815 9.12856 1.3619 9.34474 1.35585C9.5599 1.3497 9.77301 1.39922 9.96341 1.49963L16.5435 4.88989C16.6374 4.93704 16.7271 4.992 16.8118 5.05421L9.3242 8.9175L1.83662 5.11645C1.90958 5.03848 2.00227 4.98171 2.10487 4.95213L8.72606 1.52017ZM2.14595 15.0408C1.91488 14.9288 1.72044 14.7534 1.58532 14.5351C1.4502 14.3168 1.37998 14.0645 1.38288 13.8078V6.3899L4.147 7.80775V10.9105C4.14412 11.0381 4.17774 11.1638 4.2439 11.273C4.31005 11.3821 4.40599 11.4701 4.52044 11.5266L5.01837 11.7756C5.05918 11.8079 5.1111 11.8226 5.16277 11.8167C5.20932 11.8189 5.25582 11.8114 5.2993 11.7946C5.34277 11.7778 5.38227 11.7521 5.41525 11.7192C5.44823 11.6863 5.47398 11.6468 5.49084 11.6034C5.50771 11.5599 5.51532 11.5134 5.51319 11.4669V8.50796L8.62523 10.0901V18.4124L2.14595 15.0408ZM16.5441 15.0408L10.0257 18.431V10.0907L17.3078 6.39239V13.8103C17.3107 14.067 17.2405 14.3193 17.1054 14.5376C16.9703 14.7559 16.7758 14.9313 16.5448 15.0433L16.5441 15.0408Z"
            fill="#553C9A"
          />
        </Icon>
      );

    case FileType.bucket:
      return (
        <Icon viewBox="0 0 21 24" fontSize={14} className="align-middle">
          <g clipPath="url(#clip0_164_1327)">
            <path
              d="M12.001 11.1806C12.0767 11.7769 11.8377 12.255 11.2839 12.6147C10.7302 12.9744 10.2024 13.0028 9.70073 12.6999C9.33156 12.5389 9.07834 12.2644 8.94108 11.8763C8.80382 11.4882 8.80146 11.1001 8.93398 10.712C9.06651 10.3239 9.31262 10.0494 9.67233 9.88844C10.0131 9.71805 10.3563 9.66126 10.7018 9.71805C11.0473 9.77485 11.3502 9.94287 11.6105 10.2221C11.8708 10.5014 12.001 10.8209 12.001 11.1806ZM13.5771 10.8824C13.4446 9.86951 12.9097 9.09329 11.9726 8.55373C11.0354 8.01416 10.103 7.95263 9.17537 8.36914C8.579 8.63419 8.10333 9.05306 7.74835 9.62576C7.39338 10.1985 7.23009 10.8114 7.25849 11.4645C7.29635 12.326 7.66316 13.0596 8.35892 13.6654C9.05467 14.2712 9.83799 14.5363 10.7089 14.4606C11.5703 14.3848 12.2897 13.9873 12.8671 13.2678C13.4446 12.5484 13.6812 11.7533 13.5771 10.8824V10.8824ZM16.9707 3.18646C16.7814 2.93088 16.5163 2.72026 16.1755 2.5546C15.8348 2.38894 15.5602 2.28482 15.352 2.24222C15.1437 2.19962 14.8077 2.14046 14.3438 2.06473C11.5892 1.61983 8.91032 1.62929 6.30714 2.09313C5.9001 2.15939 5.58772 2.21619 5.37 2.26352C5.15228 2.31085 4.89197 2.41498 4.58905 2.5759C4.28614 2.73682 4.04949 2.94034 3.8791 3.18646C4.16308 3.45151 4.52279 3.66686 4.95823 3.83252C5.39367 3.99818 5.74155 4.1023 6.00186 4.1449C6.26218 4.1875 6.67632 4.24193 7.24429 4.30819C9.40255 4.58271 11.523 4.58744 13.6055 4.32239C14.2019 4.24666 14.6255 4.18987 14.8763 4.152C15.1272 4.11414 15.4703 4.01238 15.9057 3.84672C16.3412 3.68106 16.6962 3.46098 16.9707 3.18646ZM17.78 17.8825C17.7043 18.1287 17.6309 18.4907 17.5599 18.9688C17.4889 19.4468 17.4227 19.8444 17.3612 20.1615C17.2996 20.4786 17.1647 20.8099 16.9565 21.1554C16.7482 21.501 16.4737 21.7684 16.1329 21.9577C15.3189 22.4121 14.4219 22.7505 13.4422 22.9729C12.4625 23.1954 11.5064 23.2995 10.574 23.2853C9.64157 23.2711 8.68786 23.1836 7.71286 23.0226C7.27742 22.9469 6.89167 22.8617 6.55563 22.767C6.21958 22.6724 5.85751 22.5446 5.4694 22.3837C5.08129 22.2227 4.73578 22.0169 4.43286 21.766C4.12995 21.5152 3.88383 21.2241 3.69451 20.8928C3.45786 19.984 3.18807 18.602 2.88516 16.7466L2.97035 16.5194L3.22594 16.3916C5.33687 17.7926 7.73416 18.4931 10.4178 18.4931C13.1014 18.4931 15.5034 17.7926 17.6238 16.3916C17.8226 16.4484 17.9362 16.5573 17.9646 16.7182C17.993 16.8791 17.9694 17.0921 17.8936 17.3572C17.8179 17.6222 17.78 17.7974 17.78 17.8825V17.8825ZM20.3501 4.2372C20.104 5.81803 19.5786 8.91817 18.774 13.5376C18.7266 13.8216 18.5988 14.0866 18.3906 14.3328C18.1823 14.5789 17.9765 14.7682 17.7729 14.9007C17.5694 15.0333 17.3115 15.18 16.9991 15.3409C14.6136 16.5336 11.7265 16.9501 8.33762 16.5904C5.99003 16.3348 4.12521 15.677 2.74317 14.6168C2.60118 14.5032 2.48048 14.3777 2.38109 14.2405C2.2817 14.1032 2.20123 13.9376 2.1397 13.7435C2.07817 13.5494 2.03558 13.3885 2.01191 13.2607C1.98825 13.1329 1.95985 12.946 1.92672 12.6999C1.89359 12.4538 1.86755 12.2881 1.84862 12.2029C1.76343 11.7296 1.638 11.0196 1.47235 10.073C1.30669 9.12642 1.17416 8.36204 1.07477 7.77988C0.975377 7.19771 0.86415 6.49959 0.741091 5.68551C0.618032 4.87142 0.513906 4.1236 0.428711 3.44205C0.457109 3.19593 0.539937 2.96637 0.677195 2.75339C0.814454 2.5404 0.963544 2.36291 1.12447 2.22092C1.28539 2.07893 1.49838 1.93694 1.76343 1.79495C2.02848 1.65296 2.2462 1.54646 2.41659 1.47547C2.58698 1.40447 2.81416 1.31691 3.09814 1.21278C4.2814 0.777344 5.76285 0.47443 7.54247 0.304041C11.1301 -0.0462042 14.3296 0.190448 17.1411 1.014C18.6083 1.44944 19.6259 2.02687 20.1939 2.74629C20.3453 2.93561 20.4234 3.177 20.4282 3.47044C20.4329 3.76389 20.4069 4.01948 20.3501 4.2372V4.2372Z"
              fill="#3182CE"
            />
          </g>
          <defs>
            <clipPath id="clip0_164_1327">
              <rect width="21" height="24" fill="white" />
            </clipPath>
          </defs>
        </Icon>
      );

    default:
      break;
  }

  return <div>FileTypeIcon</div>;
}

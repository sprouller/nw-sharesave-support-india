import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
//import CustomNavbar from './components/CustomNavbar'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – NatWest ShareSave',
      defaultTitle: 'NatWest ShareSave',
      description: 'NatWest ShareSave',
      openGraph: {
        type: 'website',
        locale: 'en_GB',
        url: 'https://natwestshareplans.com',
        site_name: 'NatWest ShareSave Support Hub',
      },
    }
  },
  logo: (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="99" height="21" viewBox="0 0 99 21" fill="black">
      <path d="M24.5177 5.05469C22.8064 5.05469 21.1308 5.3553 19.9543 5.85044L19.8117 5.90348V8.99805L20.1147 8.83891C20.9169 8.44988 22.8064 8.11389 24.0007 8.11389C26.9776 8.11389 27.1024 9.24562 27.1202 10.6956H23.9472C19.7404 10.6956 17.8152 13.3128 17.8152 15.7354C17.8152 19.1129 20.5247 20.8812 23.2164 20.8812C25.0524 20.8812 26.2111 20.1916 27.1381 19.3781V20.5629H30.4893V10.3066C30.4893 5.56751 26.3002 5.05469 24.4998 5.05469M27.1024 16.1244C26.7102 16.6019 25.4981 17.8574 23.5907 17.8574C22.129 17.8574 21.2021 17.0263 21.2021 15.7354C21.2021 14.4445 22.2716 13.6664 24.1077 13.6664H27.0846V16.1244H27.1024ZM95.1613 8.36145V16.1421C95.1613 17.5391 95.8209 17.8043 97.0508 17.8043C97.746 17.8043 98.2808 17.6629 98.5482 17.5921L98.8334 17.5037V20.4922L98.6552 20.5275C97.6391 20.7928 96.7834 20.8812 95.5 20.8812C94.6265 20.8812 91.7744 20.5983 91.7744 16.8671V8.36145H89.5997V8.16694C89.5997 8.02547 89.5997 6.99985 89.5997 6.04495V5.39067H91.7744V1.5534L95.1613 0.368626V5.37299H98.8334V8.36145H95.1613ZM12.6992 0.492408H16.0148V20.5629H12.7883L3.96452 6.57546V20.5629H0.666748V0.492408H3.96452L12.6992 14.586V0.492408ZM89.2788 16.3366C89.2788 18.6178 87.2823 20.9166 83.4854 20.9166C81.8098 20.9166 79.9737 20.5099 78.6546 19.8733L78.5298 19.8202V16.5665L78.8507 16.7256C79.9559 17.3092 81.7206 17.9281 83.3963 17.9281C84.9293 17.9281 85.8206 17.3799 85.8206 16.425C85.8206 15.5232 85.2858 15.2579 83.9489 14.6744L83.4319 14.4445C82.7902 14.1616 82.2198 13.914 81.2928 13.4896C80.4016 13.0829 78.3159 12.1634 78.3159 9.38709C78.3159 7.90169 79.4746 5.09005 83.8063 5.09005C85.5889 5.09005 87.3536 5.5675 88.0666 5.90348L88.1914 5.95653V9.15721L87.8706 9.01574C86.498 8.34378 85.268 8.02548 83.9311 8.02548C83.4319 8.02548 81.792 8.13158 81.792 9.26331C81.792 10.1298 82.8259 10.5719 83.6637 10.9432L83.8241 11.0139C84.4302 11.2792 84.8937 11.4914 85.3036 11.6505L85.7315 11.8274C88.334 12.9591 89.3145 14.1616 89.3145 16.3013M70.4013 5.07237C67.8165 5.07237 63.4492 6.75229 63.4492 13.0122C63.4492 20.4745 69.4387 20.8635 70.633 20.8635C73.1821 20.8635 74.3051 20.333 75.4282 19.8202L75.5529 19.7672V16.5842L75.2321 16.7787C74.4299 17.2738 72.8612 17.8397 71.0965 17.8397C67.5313 17.8397 67.0322 15.311 66.9965 14.25H76.7829V14.0732C77.1038 11.9865 76.8007 9.05111 75.0716 7.0529C73.9308 5.74434 72.3621 5.07237 70.4191 5.07237M66.9965 11.3676C67.0857 9.93527 68.1017 8.06084 70.2587 8.06084C72.5938 8.06084 73.3069 10.1121 73.396 11.3676H66.9965ZM63.4849 0.457034L59.4206 20.5275H55.9802L52.3972 6.55777L48.7608 20.5275H45.3739L41.1313 0.457034H44.6608L47.406 14.0732L50.8285 0.457034H54.1263C54.4472 1.73023 57.5489 13.914 57.5845 14.0555C57.6023 13.8963 60.0267 0.899116 60.098 0.457034H63.4849ZM40.7213 5.33762V8.32609H37.0492V16.1067C37.0492 17.5037 37.7088 17.769 38.9387 17.769C39.6518 17.769 40.1865 17.6275 40.4539 17.5568L40.7213 17.4683V20.4568L40.5609 20.4922C39.527 20.7574 38.6714 20.8458 37.4057 20.8458C36.5323 20.8458 33.6623 20.5629 33.6623 16.8317V8.32609H31.5054V8.13158C31.5054 7.99011 31.5054 6.96449 31.5054 6.00959V5.35531H33.6623V1.51804L37.0492 0.333252V5.33762H40.7213Z" fill="#3D0F54"/>
      </svg>
    </>
  ),
  project: {
    link: null,
    icon: null,
  },
  chat: {
    link: null,
  },
  docsRepositoryBase: 'https://github.com/sprouller/nw-sharesave-support-uk',
  footer: {
    text: 'NatWest ShareSave Support UK',
  },
  feedback: {
    content: null,
  },
  editLink: {
    component: null,
  },
  search: {
    placeholder: 'Ask a question',
  },
  
  navbar: {
    //component: CustomNavbar,  
    },

  }

export default config

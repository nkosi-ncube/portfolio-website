import Image from 'next/image'
import Navbar from './Navbar'
import ContactForm from './ContactForm'
import Projects from './Projects'
import { Layout, Typography } from 'antd';
import { Button } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const { Content } = Layout;
const { Title } = Typography;

export default function Home() {
  return (
    <Layout>
      <Navbar />

      <Content>
        {/* Hero Section */}
        <motion.div
          className="relative isolate overflow-hidden  py-24 sm:py-32 bg-zinc-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1501594907352-045c5c7f1759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80"
            alt="Background"
            fill
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
          />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <Title level={1} style={{ color: 'white' }}>Your Name</Title>
              <p className="mt-6 text-lg leading-8 text-gray-300">Software Engineer</p>
              <Link to="about" smooth={true} duration={500}>
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowDownOutlined />}
                  style={{ marginTop: '2rem' }}
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* About Me Section */}
        <motion.div
          id="about"
          className="py-24 sm:py-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <Title level={2} style={{ color: 'white' }}>About Me</Title>
              <p className="mt-4 text-lg text-gray-300">I am a graduate software engineer specializing in System Integration.</p>
            </div>
          </div>
        </motion.div>

        {/* Projects Section */}
        <div id="projects">
          <Projects />
        </div>

        {/* Contact Form Section */}
        <motion.div
          id="contact"
          className="py-24 sm:py-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ContactForm />
        </motion.div>
      </Content>
    </Layout>
  )
}
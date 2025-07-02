"use client";

import { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onFinish = async (values: any) => {
    setIsSubmitting(true);
    try {
      // Simulate an API call (replace with your actual API endpoint)
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a 2-second delay

      console.log('Form Data:', values);
      form.resetFields();
      message.success('Thank you! Your message has been successfully submitted.');
    } catch (error) {
      console.error('Form Submission Error:', error);
      message.error('Oops! There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <motion.div
      className="bg-zinc-800 py-12 px-6 lg:px-8 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-lg">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact Me</h2>
        <p className="mt-2 text-lg leading-8 text-gray-300">Please fill out the form below to get in touch.</p>
        <Form
          form={form}
          name="contactForm"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          className="mt-9"
        >
          <Form.Item
            label={<span style={{ color: 'white' }}>First Name</span>}
            name="firstName"
            rules={[{ required: true, message: 'Please input your first name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={<span style={{ color: 'white' }}>Last Name</span>}
            name="lastName"
            rules={[{ required: true, message: 'Please input your last name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={<span style={{ color: 'white' }}>Email</span>}
            name="email"
            rules=([
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email address' },
            ])
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={<span style={{ color: 'white' }}>Phone Number</span>}
            name="phoneNumber"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={<span style={{ color: 'white' }}>Message</span>}
            name="message"
            rules={[{ required: true, message: 'Please input your message!' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isSubmitting}>
              {isSubmitting ? 'Send message' : 'Send message'}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </motion.div>
  );
}
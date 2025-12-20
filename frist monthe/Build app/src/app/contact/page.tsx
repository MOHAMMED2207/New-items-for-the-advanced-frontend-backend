import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Button } from '../../components/ui/button';

export default function Contact() {
  return (
    <main className="max-w-2xl mx-auto py-20">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="space-y-4">
        <Input name="name" placeholder="Your name" />
        <Input name="email" placeholder="Your email" />
        <Textarea name="message" placeholder="Your message" />
        <Button>Send Message</Button>
      </form>
    </main>
  
  
  ) 
}


import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 to-background z-0"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-muted-foreground">
                Have a question or feedback? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is this regarding?" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you" 
                      className="min-h-[150px]"
                    />
                  </div>
                  
                  <Button type="submit" size="lg">Send Message</Button>
                </form>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-3 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email Us</h3>
                      <p className="text-muted-foreground">info@signalguard.com</p>
                      <p className="text-muted-foreground">support@signalguard.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MessageSquare className="h-6 w-6 text-primary mr-3 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium mb-1">Live Chat</h3>
                      <p className="text-muted-foreground">
                        Our support team is available Monday through Friday, 9am-5pm EST.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-3 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium mb-1">Office</h3>
                      <p className="text-muted-foreground">
                        123 Blockchain Avenue<br />
                        Suite 456<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

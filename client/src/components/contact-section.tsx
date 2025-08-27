import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: ContactForm) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  const socialLinks = [
    { icon: <Github />, href: "https://github.com/chandankrsah09", label: "GitHub" },
    { icon: <Linkedin />, href: "https://linkedin.com/in/chandan-kumar-sah-953061218/", label: "LinkedIn" },
    { icon: <Twitter />, href: "#", label: "Twitter" },
    { icon: <Instagram />, href: "#", label: "Instagram" },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-glow" data-testid="contact-heading">
            <span className="text-secondary font-mono">04.</span> Get In Touch
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate leading-relaxed max-w-2xl mx-auto" data-testid="contact-description">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glassmorphism rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-secondary mb-6" data-testid="form-heading">
              Send Message
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-slate mb-2">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                  data-testid="input-name"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-coral text-sm mt-1" data-testid="error-name">
                    {errors.name.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-slate mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                  data-testid="input-email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-coral text-sm mt-1" data-testid="error-email">
                    {errors.email.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="subject" className="block text-sm font-medium text-slate mb-2">
                  Subject
                </Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                  data-testid="input-subject"
                  {...register("subject")}
                />
                {errors.subject && (
                  <p className="text-coral text-sm mt-1" data-testid="error-subject">
                    {errors.subject.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-slate mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                  data-testid="input-message"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-coral text-sm mt-1" data-testid="error-message">
                    {errors.message.message}
                  </p>
                )}
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full glassmorphism px-6 py-3 rounded-lg text-secondary border border-secondary hover:bg-secondary hover:text-primary-foreground transition-all duration-300 glow-effect"
                data-testid="button-send-message"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glassmorphism rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-secondary mb-6" data-testid="contact-info-heading">
                Let's Connect
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4" data-testid="contact-email">
                  <div className="w-12 h-12 bg-secondary bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Mail className="text-secondary" />
                  </div>
                  <div>
                    <div className="text-slate text-sm">Email</div>
                    <div className="text-lg">dbgchandan441@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4" data-testid="contact-location">
                  <div className="w-12 h-12 bg-secondary bg-opacity-20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-secondary" />
                  </div>
                  <div>
                    <div className="text-slate text-sm">Location</div>
                    <div className="text-lg">Bihar, India</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4" data-testid="contact-phone">
                  <div className="w-12 h-12 bg-secondary bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Phone className="text-secondary" />
                  </div>
                  <div>
                    <div className="text-slate text-sm">Phone</div>
                    <div className="text-lg">+91 (821) 924 2187</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glassmorphism rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-secondary mb-6" data-testid="social-links-heading">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="w-12 h-12 bg-secondary bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300"
                    data-testid={`social-link-${index}`}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

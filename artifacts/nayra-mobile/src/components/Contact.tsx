import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Valid phone number required").max(15),
  model: z.string().optional(),
  message: z.string().min(10, "Please provide more details"),
});

export function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      model: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Inquiry Sent Successfully",
        description: "Our team will contact you shortly.",
        variant: "default",
      });
      form.reset();
    }, 1000);
  }

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Book a Visit /<br/>Get a Callback</h2>
              <p className="text-white/60">
                Interested in a device? Fill out the form, and our sales expert will get back to you with the best available price and EMI options.
              </p>
            </div>
            
            <div className="p-6 bg-card border border-white/5 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-2">Priority Support</h3>
              <p className="text-sm text-white/60 mb-6">Skip the line and chat with us directly on WhatsApp for instant assistance.</p>
              <Button 
                onClick={() => window.open("https://wa.me/919631183078", "_blank")}
                className="w-full bg-[#25D366] hover:bg-[#20b858] text-white"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-3 bg-card p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-background border-white/10 text-white h-12 rounded-xl focus-visible:ring-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 99999 99999" className="bg-background border-white/10 text-white h-12 rounded-xl focus-visible:ring-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="model"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">Interested Model (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. iPhone 15 Pro Max" className="bg-background border-white/10 text-white h-12 rounded-xl focus-visible:ring-primary" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us what you're looking for..." 
                          className="bg-background border-white/10 text-white min-h-[120px] rounded-xl focus-visible:ring-primary resize-none" 
                          id="message"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 rounded-xl text-base font-bold neon-glow mt-4">
                  <Send className="mr-2" size={18} />
                  Send Inquiry
                </Button>
              </form>
            </Form>
          </div>
          
        </div>
      </div>
    </section>
  );
}

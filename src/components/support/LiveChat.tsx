
import { useState } from 'react';
import { Bot, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function LiveChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      text: input,
      isBot: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        text: "Thanks for reaching out! One of our support agents will get back to you soon.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[400px] bg-white rounded-lg">
      <div className="flex items-center gap-2 p-3 border-b">
        <Bot className="w-5 h-5 text-purple-500" />
        <span className="font-medium">Live Chat Support</span>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message, i) => (
            <div
              key={i}
              className={cn(
                "flex flex-col max-w-[80%] rounded-lg p-3",
                message.isBot 
                  ? "bg-gray-100 text-gray-800" 
                  : "bg-purple-500 text-white ml-auto"
              )}
            >
              <p className="text-sm">{message.text}</p>
              <span className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </span>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="border-t p-3">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
          <Button 
            type="submit"
            size="icon"
            className="bg-purple-500 hover:bg-purple-600"
          >
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}

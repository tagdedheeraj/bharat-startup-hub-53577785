
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageSquare, Send } from 'lucide-react';

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  isOutgoing: boolean;
}

interface Contact {
  id: number;
  name: string;
  company: string;
  lastActive: string;
  unread: number;
  avatar?: string;
}

const MessagingCenter = () => {
  const [activeContact, setActiveContact] = useState<number>(1);
  const [messageText, setMessageText] = useState('');
  
  // Mock data
  const contacts: Contact[] = [
    { id: 1, name: "Priya Sharma", company: "GreenTech Solutions", lastActive: "Just now", unread: 1 },
    { id: 2, name: "Raj Patel", company: "HealthAI", lastActive: "2 hours ago", unread: 0 },
    { id: 3, name: "Amit Singh", company: "EduLearn", lastActive: "Yesterday", unread: 3 },
  ];
  
  const messages: Record<number, Message[]> = {
    1: [
      { id: 1, sender: "Priya Sharma", content: "Hi, I wanted to discuss our recent partnership opportunity.", timestamp: "10:30 AM", isOutgoing: false },
      { id: 2, sender: "You", content: "Hello Priya! I'd be happy to discuss. What aspects are you most interested in?", timestamp: "10:35 AM", isOutgoing: true },
      { id: 3, sender: "Priya Sharma", content: "We're particularly interested in the funding timeline and expectations around equity.", timestamp: "10:40 AM", isOutgoing: false },
    ],
    2: [
      { id: 1, sender: "Raj Patel", content: "Thanks for reviewing our pitch deck. Do you have any feedback?", timestamp: "Yesterday", isOutgoing: false },
      { id: 2, sender: "You", content: "The pitch was impressive. I'd like to schedule a call to discuss some questions I have about your market strategy.", timestamp: "Yesterday", isOutgoing: true },
    ],
    3: [
      { id: 1, sender: "You", content: "I reviewed your proposal and have some thoughts on your expansion strategy.", timestamp: "Monday", isOutgoing: true },
      { id: 2, sender: "Amit Singh", content: "That would be very helpful! When would be a good time to discuss?", timestamp: "Monday", isOutgoing: false },
      { id: 3, sender: "Amit Singh", content: "Also, did you have a chance to look at our financial projections?", timestamp: "Monday", isOutgoing: false },
      { id: 4, sender: "Amit Singh", content: "We've updated them based on the latest market research.", timestamp: "Yesterday", isOutgoing: false },
    ],
  };
  
  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    // In a real app, this would integrate with a backend
    setMessageText('');
  };
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Card className="mt-6 h-[500px] flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Messaging Center
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col md:flex-row gap-4 overflow-hidden p-0">
        {/* Contacts List */}
        <div className="w-full md:w-1/3 border-r overflow-y-auto p-4">
          {contacts.map(contact => (
            <div 
              key={contact.id}
              onClick={() => setActiveContact(contact.id)}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${activeContact === contact.id ? 'bg-gray-100' : ''}`}
            >
              <Avatar>
                <AvatarImage src={contact.avatar} />
                <AvatarFallback>{getInitials(contact.name)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-medium truncate">{contact.name}</p>
                  <span className="text-xs text-muted-foreground">{contact.lastActive}</span>
                </div>
                <p className="text-sm text-muted-foreground truncate">{contact.company}</p>
              </div>
              {contact.unread > 0 && (
                <div className="min-w-6 h-6 flex items-center justify-center rounded-full bg-primary text-white text-xs">
                  {contact.unread}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Message Area */}
        <div className="flex-1 flex flex-col h-full overflow-hidden p-4">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto mb-4 space-y-4">
            {messages[activeContact]?.map(message => (
              <div 
                key={message.id} 
                className={`flex ${message.isOutgoing ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  message.isOutgoing 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  <p>{message.content}</p>
                  <p className={`text-xs mt-1 ${
                    message.isOutgoing 
                      ? 'text-primary-foreground/70' 
                      : 'text-gray-500'
                  }`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Message Input */}
          <div className="flex gap-2">
            <Input 
              placeholder="Type your message..." 
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              className="flex-1"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <Button onClick={handleSendMessage} size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MessagingCenter;

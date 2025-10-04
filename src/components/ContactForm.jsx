import { Input, Stack, Textarea } from "@chakra-ui/react";
import { Button } from "@/components/Button";
import { useState } from "react";
import { SlideIn } from "@/components/Animations";
import { Toaster, toaster } from "@/components/ui/toaster";
import { ButtonLoader } from "@/components/Loader";
import { Send } from "react-bootstrap-icons";

export default function ContackForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name && !form.email && !form.message) {
      toaster.create({
        title: "To proceed, please ensure all fields are filled.",
        type: "error",
        duration: 5000,
      });
      return;
    }

    if (!form.name) {
      toaster.create({
        title: "Missing name.",
        type: "error",
        duration: 5000,
      });
      return;
    }

    if (!form.email) {
      toaster.create({
        title: "Missing email.",
        type: "error",
        duration: 5000,
      });
      return;
    }

    if (!form.message) {
      toaster.create({
        title: "Message cannot be empty.",
        type: "error",
        duration: 5000,
      });
      return;
    }
    setIsLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setIsLoading(false);
      setForm({ name: "", email: "", message: "" });
      toaster.create({
        title:
          "Awesome — your message just landed in my inbox! I'll reply soon 😊.",
        type: "success",
        duration: 6000,
      });
    } else {
      setIsLoading(false);
      toaster.create({
        title: res.status,
        type: "error",
        duration: 5000,
      });
    }
  };

  return (
    <>
      <SlideIn
        bg="baseLight"
        p={8}
        rounded="3xl"
        ml={{ base: 0, md: 4 }}
        mt={{ base: 8, md: 0 }}
        w={{ base: "100%", md: "60%", lg: "50%" }}
      >
        <Stack as="form" gap={4} onSubmit={handleSubmit}>
          <Input
            disabled={isLoading}
            name="name"
            value={form.name}
            autoComplete="off"
            size="lg"
            outlineColor={"primary"}
            type="text"
            rounded="lg"
            borderColor={"#808080"}
            placeholder="Name"
            onChange={handleChange}
          />
          <Input
            disabled={isLoading}
            autoComplete="off"
            size="lg"
            outlineColor={"primary"}
            type="email"
            rounded="lg"
            borderColor={"#808080"}
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <Textarea
            disabled={isLoading}
            autoresize
            minH={"6rem"}
            maxH="10lh"
            size="lg"
            outlineColor={"primary"}
            rounded="lg"
            borderColor={"#808080"}
            placeholder="Your Message"
            name="message"
            value={form.message}
            onChange={handleChange}
          />
          <Button
            disabled={isLoading}
            type="submit"
            variant="solid"
            mt={2}
            size="lg"
          >
            {isLoading ? (
              <>
                <ButtonLoader /> Sending...
              </>
            ) : (
              <>
                <Send /> Send Message
              </>
            )}
          </Button>
        </Stack>
      </SlideIn>
      <Toaster />
    </>
  );
}

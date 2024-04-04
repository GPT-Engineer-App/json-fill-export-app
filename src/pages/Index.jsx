import React, { useState } from "react";
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel, FormControl, FormLabel, Select, Button, Input, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Checkbox, Text, Code, useColorModeValue, useToast } from "@chakra-ui/react";
import { FaPlus, FaDownload } from "react-icons/fa";

const Index = () => {
  const [classes, setClasses] = useState([]);
  const [limit, setLimit] = useState("");
  const [surfaceArea, setSurfaceArea] = useState(1);
  const [longTail, setLongTail] = useState(false);
  const [groundDwelling, setGroundDwelling] = useState(false);

  const toast = useToast();

  const handleClassChange = (e) => {
    const selectedClass = e.target.value;
    if (selectedClass && !classes.includes(selectedClass)) {
      setClasses([...classes, selectedClass]);
    }
  };

  const handleLimitChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setLimit(value);
    }
  };

  const handleSurfaceAreaChange = (value) => {
    setSurfaceArea(value);
  };

  const handleLongTailChange = (e) => {
    setLongTail(e.target.checked);
  };

  const handleGroundDwellingChange = (e) => {
    setGroundDwelling(e.target.checked);
  };

  const generateJSON = () => {
    const json = {
      classes,
      limit: parseInt(limit),
      surface_area: surfaceArea,
      family_traits: {
        long_tail: longTail ? "yes" : "no",
        ground_dwelling: groundDwelling,
      },
    };
    return JSON.stringify(json, null, 2);
  };

  const downloadJSON = () => {
    const json = generateJSON();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "data.json";
    link.click();
    URL.revokeObjectURL(url);
    toast({
      title: "JSON Downloaded",
      description: "The JSON file has been downloaded successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const bgColor = useColorModeValue("gray.100", "gray.700");
  const inputBgColor = useColorModeValue("white", "gray.800");

  return (
    <Box p={8}>
      <Tabs isFitted variant="enclosed">
        <TabList mb={4}>
          <Tab>Form</Tab>
          <Tab>JSON</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box p={6} borderWidth={1} borderRadius="md" backgroundColor={bgColor}>
              <FormControl mb={4}>
                <FormLabel>Classes</FormLabel>
                <Select placeholder="Select a class" value="" onChange={handleClassChange} backgroundColor={inputBgColor}>
                  <option value="class1">Class 1</option>
                  <option value="class2">Class 2</option>
                  <option value="class3">Class 3</option>
                </Select>
                <Box mt={2}>
                  {classes.map((cls, index) => (
                    <Text key={index}>{cls}</Text>
                  ))}
                </Box>
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Limit</FormLabel>
                <Input type="text" value={limit} onChange={handleLimitChange} backgroundColor={inputBgColor} />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Surface Area</FormLabel>
                <Slider min={1} max={30} value={surfaceArea} onChange={handleSurfaceAreaChange}>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                <Text mt={2}>{surfaceArea}</Text>
              </FormControl>
              <FormControl mb={4}>
                <Checkbox isChecked={longTail} onChange={handleLongTailChange}>
                  Long Tail
                </Checkbox>
              </FormControl>
              <FormControl mb={4}>
                <Checkbox isChecked={groundDwelling} onChange={handleGroundDwellingChange}>
                  Ground Dwelling
                </Checkbox>
              </FormControl>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box p={6} borderWidth={1} borderRadius="md" backgroundColor={bgColor}>
              <Code display="block" whiteSpace="pre" p={4} borderRadius="md" backgroundColor={inputBgColor}>
                {generateJSON()}
              </Code>
              <Button mt={4} leftIcon={<FaDownload />} onClick={downloadJSON} colorScheme="blue">
                Download JSON
              </Button>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Index;

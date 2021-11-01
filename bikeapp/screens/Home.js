import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

export default function Home(params) {
   const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 55,
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Ionicons name="ios-menu-outline" size={24} color="black" />
        <FontAwesome name="motorcycle" size={24} color="black" />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <AntDesign name="search1" size={20} color="black" />
          <Ionicons
            style={{ marginLeft: 15 }}
            name="notifications-outline"
            size={20}
            color="black"
          />
        </View>
      </View>

      <Text style={{ marginTop: 15, color: 'grey' }}>
        The World's{' '}
        <Text style={{ color: 'orange', fontSize: 18, fontWeight: 'bolder' }}>
          Best Bike
        </Text>{' '}
      </Text>

      <Text style={{ fontWeight: 'boldest', marginTop: 20 }}>Categories</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View
          style={{
            backgroundColor: '#f4f2f2',
            padding: 10,
            paddingHorizontal: 15,
            borderRadius: 12,
          }}>
          <TouchableOpacity>
            <Text style={{ color: 'orange' }}>All</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ backgroundColor: '#f4f2f2', padding: 10, borderRadius: 12 }}>
          <TouchableOpacity>
            <Text style={{ color: '#828080' }}>Roadbike</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ backgroundColor: '#f4f2f2', padding: 10, borderRadius: 12 }}>
          <TouchableOpacity>
            <Text style={{ color: '#828080' }}>Mountain</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ backgroundColor: '#f4f2f2', padding: 10, borderRadius: 12 }}>
          <TouchableOpacity>
            <Text style={{ color: '#828080' }}>Urban</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              marginRight: 20,
              backgroundColor: '#f4f2f2',
              width: 150,
              height: 260,
              borderRadius: 25,
              padding: 15,
            }}>
            <Image
              style={{
                height: 150,
                width: 90,
                justifyContent: 'center',
                alignSelf: 'center',
              }}
              source={require('./Images/watch.png')}
            />
            <Text style={{ color: '#828080', textAlign: 'center' }}>
              Pinarello Bike
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              1,700.00
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              backgroundColor: '#f4f2f2',
              width: 200,
              height: 260,
              borderRadius: 25,
              padding: 15,
            }}>
            <Image
              style={{
                height: 170,
                width: 100,
                justifyContent: 'center',
                alignSelf: 'center',
              }}
              source={require('./Images/wa-1.png')}
            />
            <Text style={{ color: '#828080', textAlign: 'center' }}>
              Pinarello Bike
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              1,700.00
            </Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              backgroundColor: '#f4f2f2',
              width: 200,
              height: 260,
              borderRadius: 25,
              padding: 15,
              marginRight: 20,
            }}>
            <Image
              style={{
                height: 170,
                width: 100,
                justifyContent: 'center',
                alignSelf: 'center',
              }}
              source={require('./Images/wa-2.png')}
            />
            <Text style={{ color: '#828080', textAlign: 'center' }}>
              Pinarello Bike
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              1,700.00
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              backgroundColor: '#f4f2f2',
              width: 200,
              height: 260,
              borderRadius: 25,
              padding: 15,
            }}>
            <Image
              style={{
                height: 170,
                width: 100,
                justifyContent: 'center',
                alignSelf: 'center',
              }}
              source={require('./Images/wa-3.png')}
            />
            <Text style={{ color: '#828080', textAlign: 'center' }}>
              Pinarello Bike
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              1,700.00
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
